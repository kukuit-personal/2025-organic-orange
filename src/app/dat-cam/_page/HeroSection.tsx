import { btnOutline, btnPrimary, ORANGE, pill, ZALO_LINK, PHONE } from './constants'

export function HeroSection() {
  return (
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
              {[
                'Thu hoạch mới, đóng gói cẩn thận',
                'Có video/quy trình vườn minh bạch',
                'Hỗ trợ đổi/hoàn nếu dập/hư nhiều',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-[rgb(240,102,51)]">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
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

          <div className="rounded-3xl border border-orange-100 bg-white p-4 shadow-sm">
            <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-[#FFF4EA] p-4">
              <div className="aspect-[4/3] w-full rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-slate-400">
                Ảnh cam / ảnh đóng gói / ảnh vườn
              </div>

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
  )
}
