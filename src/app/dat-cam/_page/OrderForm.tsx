'use client'

import { useMemo, useState } from 'react'
import { btnPrimary, inputBase, softCard, ZALO_LINK, PHONE } from './constants'
import type { OrderFormState, PackageKey } from './types'

const initialForm: OrderFormState = {
  name: '',
  phone: '',
  address: '',
  packageKey: '10kg',
  otherKg: '',
  time: '',
  note: '',
  payment: 'cod',
}

export function OrderForm() {
  const [form, setForm] = useState<OrderFormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // honeypot (bot hay tự điền). input hidden này user thường không thấy/không điền
  const [hp, setHp] = useState('')

  const orderSummary = useMemo(() => {
    const pkg = form.packageKey === 'other' ? `${form.otherKg || '…'} kg` : form.packageKey
    return `Gói: ${pkg} | Thanh toán: ${form.payment.toUpperCase()} | Nhận: ${form.time || 'linh hoạt'}`
  }, [form])

  function onChange<K extends keyof OrderFormState>(key: K, value: OrderFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function validate() {
    if (!form.name.trim()) return 'Vui lòng nhập họ tên.'
    if (!form.phone.trim()) return 'Vui lòng nhập số điện thoại.'
    if (!form.address.trim()) return 'Vui lòng nhập địa chỉ.'
    if (form.packageKey === 'other' && !form.otherKg.trim()) return 'Vui lòng nhập số kg muốn đặt.'
    return ''
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (isSubmitting) return

    const err = validate()
    if (err) return alert(err)

    try {
      setIsSubmitting(true)

      // nếu bot điền hp -> cứ trả OK giả để bot không thử tiếp
      if (hp.trim().length > 0) {
        alert('Đã nhận đơn! Bên mình sẽ gọi xác nhận sớm.')
        setForm(initialForm)
        setHp('')
        return
      }

      const res = await fetch('/api/mktonline-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          hp: '', // honeypot field, server sẽ check hp
        }),
      })

      const data = await res.json().catch(() => ({}) as any)

      if (!res.ok || !data?.ok) {
        const msg =
          data?.message ||
          (res.status === 400 ? 'Dữ liệu chưa hợp lệ. Vui lòng kiểm tra lại.' : 'Lỗi hệ thống.')
        alert(msg)
        return
      }

      alert('Đã nhận đơn! Bên mình sẽ gọi xác nhận sớm.')
      setForm(initialForm)
      setHp('')
    } catch (error) {
      console.error(error)
      alert('Không gửi được đơn. Vui lòng thử lại hoặc nhắn Zalo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="form-dat-cam" className="px-4 pb-16">
      <div className={'mx-auto max-w-3xl ' + softCard + ' p-6'}>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[rgb(240,102,51)]">
            Đặt hàng nhanh
          </p>
          <h2 className="text-2xl font-bold">Điền form đặt cam</h2>
          <p className="text-sm text-slate-600">
            Điền xong bên mình sẽ gọi xác nhận. Bạn cũng có thể bấm{' '}
            <a className="underline text-[rgb(240,102,51)]" href={`tel:${PHONE}`}>
              Gọi
            </a>{' '}
            hoặc{' '}
            <a
              className="underline text-[rgb(240,102,51)]"
              href={ZALO_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Nhắn Zalo
            </a>
            .
          </p>
        </div>

        <form onSubmit={submit} className="mt-6 grid gap-4">
          {/* Honeypot field (ẩn) */}
          <input
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className={inputBase}
              placeholder="Họ tên"
              value={form.name}
              onChange={(e) => onChange('name', e.target.value)}
              disabled={isSubmitting}
            />
            <input
              className={inputBase}
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <input
            className={inputBase}
            placeholder="Địa chỉ nhận hàng"
            value={form.address}
            onChange={(e) => onChange('address', e.target.value)}
            disabled={isSubmitting}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <select
              className={inputBase}
              value={form.packageKey}
              onChange={(e) => onChange('packageKey', e.target.value as PackageKey)}
              disabled={isSubmitting}
            >
              <option value="5kg">Combo 5kg</option>
              <option value="10kg">Combo 10kg</option>
              <option value="20kg">Combo 20kg</option>
              <option value="other">Số kg khác</option>
            </select>

            <input
              className={inputBase + (form.packageKey !== 'other' ? ' opacity-60' : '')}
              placeholder="Nếu số kg khác (vd: 7)"
              disabled={isSubmitting || form.packageKey !== 'other'}
              value={form.otherKg}
              onChange={(e) => onChange('otherKg', e.target.value)}
            />

            <select
              className={inputBase}
              value={form.payment}
              onChange={(e) => onChange('payment', e.target.value as any)}
              disabled={isSubmitting}
            >
              <option value="cod">COD</option>
              <option value="bank">Chuyển khoản</option>
            </select>
          </div>

          <input
            className={inputBase}
            placeholder="Khung giờ nhận (vd: chiều 3-6h, hoặc linh hoạt)"
            value={form.time}
            onChange={(e) => onChange('time', e.target.value)}
            disabled={isSubmitting}
          />

          <textarea
            className={inputBase + ' min-h-[110px]'}
            placeholder="Ghi chú (vd: chọn trái để vắt nước/ăn tươi, giao giờ..., xuất hoá đơn...)"
            value={form.note}
            onChange={(e) => onChange('note', e.target.value)}
            disabled={isSubmitting}
          />

          <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Tóm tắt đơn:</span> {orderSummary}
          </div>

          <button
            type="submit"
            className={btnPrimary + (isSubmitting ? ' opacity-80' : '')}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Đang gửi...' : 'Xác nhận đặt hàng'}
          </button>

          <p className="text-xs text-slate-500">
            Bằng cách đặt hàng, bạn đồng ý để bên mình liên hệ xác nhận đơn.
          </p>
        </form>
      </div>
    </section>
  )
}
