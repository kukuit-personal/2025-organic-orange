import { NextResponse } from 'next/server'
import { z } from 'zod'
import { FieldValue } from 'firebase-admin/firestore'
import { getAdminDb } from '@/lib/firebaseAdmin'

export const runtime = 'nodejs'

const OrderSchema = z.object({
  name: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(8).max(20),
  address: z.string().trim().min(1).max(200),

  packageKey: z.enum(['5kg', '10kg', '20kg', 'other']),
  otherKg: z.string().trim().max(10).optional().default(''),

  time: z.string().trim().max(60).optional().default(''),
  note: z.string().trim().max(500).optional().default(''),
  payment: z.enum(['cod', 'bank']),

  hp: z.string().optional(), // honeypot
})

function normalizePhone(phone: string) {
  return phone.replace(/\s+/g, '').replace(/[^\d+]/g, '')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = OrderSchema.parse(body)

    // honeypot
    if (parsed.hp && parsed.hp.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    // nếu chọn other thì bắt buộc có otherKg và phải là số
    if (parsed.packageKey === 'other') {
      const kg = (parsed.otherKg || '').trim()
      if (!kg) {
        return NextResponse.json(
          { ok: false, message: 'Vui lòng nhập số kg muốn đặt.' },
          { status: 400 }
        )
      }
      if (!/^\d+(\.\d+)?$/.test(kg)) {
        return NextResponse.json({ ok: false, message: 'Số kg không hợp lệ.' }, { status: 400 })
      }
    }

    const db = getAdminDb()

    // ✅ PATH MỚI: camhuucovn/mktonline/orders/{orderId}
    const colRef = db
      .collection('camhuucovn') // collection
      .doc('mktonline') // document
      .collection('orders') // subcollection

    const docRef = colRef.doc() // {orderId} auto

    await docRef.set({
      name: parsed.name,
      phone: normalizePhone(parsed.phone),
      address: parsed.address,

      packageKey: parsed.packageKey,
      otherKg: parsed.otherKg || '',

      time: parsed.time || '',
      note: parsed.note || '',
      payment: parsed.payment,

      status: 'new',
      source: 'web',

      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    })

    return NextResponse.json({ ok: true, id: docRef.id }, { status: 200 })
  } catch (err: any) {
    if (err?.issues) {
      return NextResponse.json(
        { ok: false, message: 'Dữ liệu chưa hợp lệ.', issues: err.issues },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { ok: false, message: err?.message || 'Server error' },
      { status: 500 }
    )
  }
}
