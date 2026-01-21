import { softCard } from './constants'

export function TrustFaqSection() {
  return (
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
  )
}
