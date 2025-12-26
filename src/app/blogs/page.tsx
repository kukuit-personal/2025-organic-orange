import Link from 'next/link'
import Image from 'next/image'

type Post = {
  title: string
  slug: string
  excerpt: string
  date: string // YYYY-MM-DD
  tag?: string
  thumbnail: string
}

const POSTS: Post[] = [
  {
    title: 'Vitamin C trong cam sành: lợi ích & cách dùng đúng',
    slug: 'vitamin-c-trong-cam-sanh-loi-ich-va-cach-dung-dung',
    excerpt:
      'Vitamin C hỗ trợ miễn dịch, hấp thu sắt và chống oxy hoá. Bài viết tổng hợp liều dùng phù hợp và lưu ý khi dùng cam hằng ngày.',
    date: '2025-12-26',
    tag: 'Dinh dưỡng',
    thumbnail: '/images/blog/post-0001/thumbnail.jpg',
  },
  {
    title: 'Cam hữu cơ khác cam thường như thế nào?',
    slug: 'cam-huu-co-khac-cam-thuong-nhu-the-nao',
    excerpt:
      'Không chỉ là “không thuốc”. Hữu cơ còn là cách chăm đất, nước và hệ sinh thái để cây khoẻ tự nhiên, trái ngon theo mùa.',
    date: '2025-12-26',
    tag: 'Hữu cơ',
    thumbnail: '/images/blog/post-0002/thumbnail.jpg',
  },
  {
    title: 'Ăn cam mỗi ngày có tốt không? Ai nên lưu ý?',
    slug: 'an-cam-moi-ngay-co-tot-khong-ai-nen-luu-y',
    excerpt:
      'Cam tốt nhưng không phải ai cũng dùng giống nhau. Người đau dạ dày, tiểu đường, trẻ nhỏ… nên chú ý cách ăn và thời điểm.',
    date: '2025-12-26',
    tag: 'Sức khoẻ',
    thumbnail: '/images/blog/post-0003/thumbnail.jpg',
  },
]

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="max-w-3xl">
        <p className="text-orange-600 font-semibold">BLOG CAM HỮU CƠ</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Kiến thức về cam sành, Vitamin C & sức khoẻ
        </h1>
        <p className="mt-3 text-gray-600">
          Chia sẻ ngắn gọn, dễ hiểu từ vườn cam ở Vĩnh Long: dinh dưỡng, cách dùng cam đúng, và câu
          chuyện hữu cơ.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition-shadow"
          >
            {/* Thumbnail (tỉ lệ ngang 4:3 ~ 400x300) */}
            <Link href={`/blog/${p.slug}`} className="block">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>

            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                  {p.tag || 'Blog'}
                </span>
                <time className="text-xs text-gray-500">{p.date}</time>
              </div>

              <h2 className="mt-3 text-lg font-bold text-gray-900 line-clamp-2">
                <Link href={`/blog/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">{p.excerpt}</p>

              <div className="mt-4">
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Đọc tiếp →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ✅ CTA moved to end of page */}
      <section className="mt-10 max-w-3xl">
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
          <div className="font-semibold text-gray-900">
            🍊 Cam sành hữu cơ đang thu hoạch –{' '}
            <Link href="/products" className="text-orange-600 hover:underline">
              Xem sản phẩm
            </Link>
          </div>
          <div className="mt-2 text-gray-600">
            Bạn muốn mua cam trực tiếp từ vườn?{' '}
            <Link href="/contact" className="text-orange-600 hover:underline">
              → Liên hệ
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
