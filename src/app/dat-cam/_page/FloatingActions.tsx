import { PHONE, ZALO_LINK } from './constants'

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      <a
        href={`tel:${PHONE}`}
        className="rounded-full px-4 py-3 shadow-lg border border-orange-200 bg-white hover:bg-orange-50 text-sm font-semibold"
      >
        📞 Gọi ngay
      </a>
      <a
        href={ZALO_LINK}
        target="_blank"
        rel="noreferrer"
        className="rounded-full px-4 py-3 shadow-lg border border-orange-200 bg-white hover:bg-orange-50 text-sm font-semibold"
      >
        💬 Nhắn Zalo
      </a>
      <a
        href="#form-dat-cam"
        className="rounded-full px-4 py-3 shadow-lg text-white text-sm font-semibold bg-[rgb(240,102,51)] hover:opacity-95"
      >
        🧾 Đặt hàng
      </a>
    </div>
  )
}
