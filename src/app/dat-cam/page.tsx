// app/dat-cam/page.tsx
'use client'

import { useMemo, useState } from 'react'

type PackageKey = '5kg' | '10kg' | '20kg' | 'other'

export default function DatCamPage() {
  const PHONE = '09xxxxxxxx' // TODO: thay số
  const ZALO_LINK = `https://zalo.me/${PHONE}`

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    packageKey: '10kg' as PackageKey,
    otherKg: '',
    time: '',
    note: '',
    payment: 'cod',
  })

  const orderSummary = useMemo(() => {
    const pkg = form.packageKey === 'other' ? `${form.otherKg || '…'} kg` : form.packageKey
    return `Gói: ${pkg} | Thanh toán: ${form.payment.toUpperCase()} | Nhận: ${
      form.time || 'linh hoạt'
    }`
  }, [form])

  function onChange<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
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
    const err = validate()
    if (err) {
      alert(err)
      return
    }

    // TODO: nối API / lưu Google Sheet / gửi Zalo OA...
    console.log('ORDER', form)

    alert('Đã nhận đơn! Bên mình sẽ gọi xác nhận sớm.')
    setForm({
      name: '',
      phone: '',
      address: '',
      packageKey: '10kg',
      otherKg: '',
      time: '',
      note: '',
      payment: 'cod',
    })
  }

  // ====== THEME (tone cam như ảnh) ======
  const ORANGE = 'rgb(240,102,51)'
  const softCard = 'rounded-3xl border border-orange-100 bg-white shadow-sm'
  const softRing = 'focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-200'
  const inputBase =
    'w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm ' +
    softRing

  const btnPrimary =
    'inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-sm ' +
    'bg-[rgb(240,102,51)] hover:opacity-95 active:opacity-90 ' +
    'focus:outline-none focus:ring-4 focus:ring-orange-200'

  const btnOutline =
    'inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold ' +
    'border border-orange-200 bg-white text-slate-900 hover:bg-orange-50 ' +
    'focus:outline-none focus:ring-4 focus:ring-orange-100'

  const pill =
    'inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold ' +
    'text-[rgb(240,102,51)]'

  // =====================================

  return (
    <main className="min-h-screen bg-[#FFFBF7] text-slate-900">
      {/* Floating buttons */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
        <a
          href={`tel:${PHONE}`}
          className={
            'rounded-full px-4 py-3 shadow-lg border border-orange-200 bg-white hover:bg-orange-50 text-sm font-semibold'
          }
        >
          📞 Gọi ngay
        </a>
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noreferrer"
          className={
            'rounded-full px-4 py-3 shadow-lg border border-orange-200 bg-white hover:bg-orange-50 text-sm font-semibold'
          }
        >
          💬 Nhắn Zalo
        </a>
        <a
          href="#form-dat-cam"
          className={
            'rounded-full px-4 py-3 shadow-lg text-white text-sm font-semibold ' +
            'bg-[rgb(240,102,51)] hover:opacity-95'
          }
        >
          🧾 Đặt hàng
        </a>
      </div>

      {/* Hero */}
      <section className="px-4 pt-10 pb-8 md:pb-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className={pill}>
                <span className="uppercase tracking-wide">Cam sành hữu cơ</span>
                <span className="text-slate-500 font-medium">
                  • Thu hoạch theo ngày • Giao tận nhà
                </span>
              </p>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                Đặt Cam Sành Hữu Cơ – Giao Tận Nhà
              </h1>

              <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                Cam từ vườn, chọn trái kỹ trước khi giao. Phù hợp ăn tươi, vắt nước, biếu tặng.
              </p>

              <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-[rgb(240,102,51)]">
                    ✓
                  </span>
                  Thu hoạch mới, đóng gói cẩn thận
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-[rgb(240,102,51)]">
                    ✓
                  </span>
                  Có video/quy trình vườn minh bạch
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-[rgb(240,102,51)]">
                    ✓
                  </span>
                  Hỗ trợ đổi/hoàn nếu dập/hư nhiều
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} className={btnPrimary}>
                  📞 Gọi đặt nhanh
                </a>
                <a href={ZALO_LINK} target="_blank" rel="noreferrer" className={btnOutline}>
                  💬 Nhắn Zalo
                </a>
                <a href="#form-dat-cam" className={btnOutline}>
                  🧾 Điền form đặt hàng
                </a>
              </div>
            </div>

            {/* Image block placeholder (style giống khung ảnh bên phải) */}
            <div className="rounded-3xl border border-orange-100 bg-white p-4 shadow-sm">
              <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-[#FFF4EA] p-4">
                <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-slate-400">
                  Ảnh cam / ảnh đóng gói / ảnh vườn
                </div>

                {/* “caption” mềm như ảnh mẫu */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-orange-100 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: ORANGE }}
                  />
                  Vườn cam tại Vĩnh Long • Chọn trái kỹ trước khi giao
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Tip: 1 ảnh “trái cam cận cảnh” + 1 ảnh “đóng thùng” sẽ tăng tỉ lệ chốt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Giá & Combo</h2>
              <p className="mt-2 text-slate-600 text-sm">
                Chọn gói phổ biến để đặt nhanh. (Bạn thay giá thật vào đây)
              </p>
            </div>
            <span className="hidden md:inline-flex rounded-full bg-orange-50 text-[rgb(240,102,51)] border border-orange-200 px-3 py-1 text-xs font-semibold">
              Ưu tiên gói 10kg
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { key: '5kg', title: 'Combo 5kg', price: '…₫', desc: 'Phù hợp gia đình nhỏ' },
              { key: '10kg', title: 'Combo 10kg', price: '…₫', desc: 'Tiết kiệm hơn' },
              { key: '20kg', title: 'Combo 20kg', price: '…₫', desc: 'Biếu tặng / đặt chung' },
            ].map((x) => (
              <div key={x.title} className={softCard + ' p-5'}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{x.title}</h3>
                  <span className="text-lg font-extrabold text-slate-900">{x.price}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>

                <a href="#form-dat-cam" className={'mt-4 inline-flex w-full ' + btnPrimary}>
                  Chọn gói này
                </a>
              </div>
            ))}
          </div>

          <div className={'mt-6 ' + softCard + ' p-5 text-sm text-slate-700'}>
            <p className="font-semibold">Vận chuyển & thanh toán</p>
            <ul className="mt-2 space-y-1 text-slate-600">
              <li>• Phí ship: tuỳ khu vực (bên mình báo trước khi giao)</li>
              <li>• Nhận hàng: hẹn khung giờ theo lịch</li>
              <li>• Thanh toán: COD hoặc chuyển khoản</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust / FAQ */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <div className={softCard + ' p-6'}>
            <h2 className="text-xl font-bold">Vì sao nên đặt cam từ vườn?</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>✅ Tươi hơn vì ít qua trung gian</li>
              <li>✅ Chọn trái kỹ trước khi giao</li>
              <li>✅ Minh bạch nguồn gốc & quy trình</li>
              <li>✅ Phù hợp ăn tươi, vắt nước, biếu tặng</li>
            </ul>
          </div>

          <div className={softCard + ' p-6'}>
            <h2 className="text-xl font-bold">Câu hỏi thường gặp</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div>
                <p className="font-semibold">Cam có ngọt không?</p>
                <p className="text-slate-600">
                  Vị ngọt thanh – chua nhẹ tuỳ lứa. Muốn vắt nước/ăn tươi bạn ghi chú giúp.
                </p>
              </div>
              <div>
                <p className="font-semibold">Bảo quản được bao lâu?</p>
                <p className="text-slate-600">
                  Để mát 5–10 ngày tuỳ độ chín. Nên dùng dần để ngon nhất.
                </p>
              </div>
              <div>
                <p className="font-semibold">Nếu hàng bị dập/hư?</p>
                <p className="text-slate-600">
                  Bên mình hỗ trợ đổi/hoàn phần dập/hư nhiều theo ảnh lúc nhận hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
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
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className={inputBase}
                placeholder="Họ tên"
                value={form.name}
                onChange={(e) => onChange('name', e.target.value)}
              />
              <input
                className={inputBase}
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={(e) => onChange('phone', e.target.value)}
              />
            </div>

            <input
              className={inputBase}
              placeholder="Địa chỉ nhận hàng"
              value={form.address}
              onChange={(e) => onChange('address', e.target.value)}
            />

            <div className="grid gap-4 md:grid-cols-3">
              <select
                className={inputBase}
                value={form.packageKey}
                onChange={(e) => onChange('packageKey', e.target.value as PackageKey)}
              >
                <option value="5kg">Combo 5kg</option>
                <option value="10kg">Combo 10kg</option>
                <option value="20kg">Combo 20kg</option>
                <option value="other">Số kg khác</option>
              </select>

              <input
                className={inputBase + (form.packageKey !== 'other' ? ' opacity-60' : '')}
                placeholder="Nếu số kg khác (vd: 7)"
                disabled={form.packageKey !== 'other'}
                value={form.otherKg}
                onChange={(e) => onChange('otherKg', e.target.value)}
              />

              <select
                className={inputBase}
                value={form.payment}
                onChange={(e) => onChange('payment', e.target.value)}
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
            />

            <textarea
              className={inputBase + ' min-h-[110px]'}
              placeholder="Ghi chú (vd: chọn trái để vắt nước/ăn tươi, giao giờ..., xuất hoá đơn...)"
              value={form.note}
              onChange={(e) => onChange('note', e.target.value)}
            />

            <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Tóm tắt đơn:</span> {orderSummary}
            </div>

            <button type="submit" className={btnPrimary}>
              Xác nhận đặt hàng
            </button>

            <p className="text-xs text-slate-500">
              Bằng cách đặt hàng, bạn đồng ý để bên mình liên hệ xác nhận đơn.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}
