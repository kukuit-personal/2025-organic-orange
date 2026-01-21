import { btnPrimary, softCard } from './constants'

export function PricingSection() {
  return (
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
  )
}
