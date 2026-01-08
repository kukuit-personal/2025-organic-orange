// src/app/blog/_posts/post-0006.tsx
import Image from 'next/image'
import Link from 'next/link'

import { getPostById } from '../posts'

const p2 = getPostById('post-0004')
const p3 = getPostById('post-0005')

export default function Post0006() {
  return (
    <>
      <h2 className="mt-4">Nhu cầu Vitamin C mỗi ngày bao nhiêu là đủ? (theo độ tuổi)</h2>

      <p className="mt-4">
        Vitamin C (axit ascorbic) là vitamin <b className="italic">tan trong nước</b>, cơ thể không
        dự trữ được nhiều nên cách tốt nhất là bổ sung <b className="italic">đều mỗi ngày</b> từ
        thực phẩm. Nhu cầu Vitamin C thay đổi theo độ tuổi, giới tính và giai đoạn như mang thai/cho
        con bú.
      </p>

      <p className="mt-4">
        Nếu bạn đang băn khoăn “mỗi ngày cần bao nhiêu mg là đủ?”, dưới đây là bảng khuyến nghị phổ
        biến theo từng nhóm tuổi để bạn dễ áp dụng trong bữa ăn hằng ngày.
      </p>

      <p className="mt-4">
        <b className="italic">Bảng nhu cầu Vitamin C khuyến nghị (mg/ngày):</b>
      </p>

      {/* Ảnh 2 */}
      <div className="mt-4 overflow-hidden rounded-xl border">
        <Image
          src="/images/blogs/post-0006/bang-nhu-cau-vitamin-c-mg-moi-ngay.jpg"
          alt="Bảng nhu cầu Vitamin C (mg/ngày) theo độ tuổi"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-orange-50">
            <tr>
              <th className="p-3 text-left">Nhóm tuổi / giai đoạn</th>
              <th className="p-3 text-right">Nhu cầu (mg/ngày)</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-3">0–6 tháng</td>
              <td className="p-3 text-right">40</td>
            </tr>
            <tr>
              <td className="p-3">7–12 tháng</td>
              <td className="p-3 text-right">50</td>
            </tr>
            <tr>
              <td className="p-3">1–3 tuổi</td>
              <td className="p-3 text-right">15</td>
            </tr>
            <tr>
              <td className="p-3">4–8 tuổi</td>
              <td className="p-3 text-right">25</td>
            </tr>
            <tr>
              <td className="p-3">9–13 tuổi</td>
              <td className="p-3 text-right">45</td>
            </tr>
            <tr>
              <td className="p-3">14–18 tuổi (nam)</td>
              <td className="p-3 text-right">75</td>
            </tr>
            <tr>
              <td className="p-3">14–18 tuổi (nữ)</td>
              <td className="p-3 text-right">65</td>
            </tr>
            <tr>
              <td className="p-3">Người lớn (nam)</td>
              <td className="p-3 text-right">90</td>
            </tr>
            <tr>
              <td className="p-3">Người lớn (nữ)</td>
              <td className="p-3 text-right">75</td>
            </tr>
            <tr>
              <td className="p-3">Mang thai (tuổi teen)</td>
              <td className="p-3 text-right">80</td>
            </tr>
            <tr>
              <td className="p-3">Mang thai (người lớn)</td>
              <td className="p-3 text-right">85</td>
            </tr>
            <tr>
              <td className="p-3">Cho con bú (tuổi teen)</td>
              <td className="p-3 text-right">115</td>
            </tr>
            <tr>
              <td className="p-3">Cho con bú (người lớn)</td>
              <td className="p-3 text-right">120</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">
        <b className="italic">Lưu ý cho người hút thuốc:</b> thường cần{' '}
        <b className="italic">cộng thêm 35 mg/ngày</b> so với mức khuyến nghị tương ứng ở bảng trên.
      </p>

      <p className="mt-4">
        <b className="italic">Ăn gì để đủ Vitamin C?</b> Cách đơn giản là chia đều trong ngày: 1–2
        khẩu phần trái cây + 1–2 khẩu phần rau. Các nguồn giàu Vitamin C dễ gặp gồm cam/quýt, ổi,
        kiwi, dâu, ớt chuông, bông cải xanh…
      </p>

      {/* Ảnh 3 */}
      <div className="mt-4 overflow-hidden rounded-xl border">
        <Image
          src="/images/blogs/post-0006/thuc-pham-giau-vitamin-c.jpg"
          alt="Thực phẩm giàu Vitamin C: cam, ổi, kiwi, ớt chuông, bông cải"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <p className="mt-4">
        <b className="italic">Có cần uống liều cao hơn không?</b> Với đa số người khỏe mạnh, đạt mức
        khuyến nghị là đủ. Không nên tự “megadose” kéo dài. Ở người lớn, ngưỡng tối đa dung nạp
        thường được nhắc tới là <b className="italic">2.000 mg/ngày</b>; dùng quá cao có thể gây khó
        chịu tiêu hoá.
      </p>

      {/* CTA */}
      <div className="mt-4 rounded-xl border bg-orange-50 p-4">
        <p className="font-semibold">🍊 Cam sành hữu cơ đang thu hoạch – Xem sản phẩm</p>
        <p className="mt-2">Bạn muốn mua cam trực tiếp từ vườn? → Liên hệ</p>
      </div>

      <p className="mt-4">
        Xem thêm:{' '}
        {p2 ? (
          <Link href={`/blog/${p2.slug}`} className="text-orange-600 hover:underline">
            {p2.title}
          </Link>
        ) : null}
        {p2 && p3 ? <>{' • '}</> : null}
        {p3 ? (
          <Link href={`/blog/${p3.slug}`} className="text-orange-600 hover:underline">
            {p3.title}
          </Link>
        ) : null}
      </p>
    </>
  )
}
