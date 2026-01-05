// src/app/blog/posts.ts

export type Post = {
  id: string // 'post-0001'
  title: string
  slug: string
  excerpt: string
  date: string // YYYY-MM-DD
  tag?: string
  thumbnail: string
  hero?: string
}

export const getPostById = (id: string) => POSTS.find((p) => p.id === id)

export const POSTS: Post[] = [
  {
    id: 'post-0001',
    title: 'Vitamin C trong cam sành: lợi ích & cách dùng đúng',
    slug: 'vitamin-c-trong-cam-sanh-loi-ich-va-cach-dung-dung',
    excerpt:
      'Vitamin C hỗ trợ miễn dịch, hấp thu sắt và chống oxy hoá. Bài viết tổng hợp cách dùng phù hợp và lưu ý khi ăn cam hằng ngày.',
    date: '2025-12-26',
    tag: 'Dinh dưỡng',
    thumbnail: '/images/blogs/post-0001/thumbnail.jpg',
    hero: '/images/blogs/post-0001/hero.jpg',
  },
  {
    id: 'post-0002',
    title: 'Cam hữu cơ khác cam thường như thế nào?',
    slug: 'cam-huu-co-khac-cam-thuong-nhu-the-nao',
    excerpt:
      'Không chỉ là “không thuốc”. Hữu cơ còn là cách chăm đất, nước và hệ sinh thái để cây khoẻ tự nhiên, trái ngon theo mùa.',
    date: '2025-12-26',
    tag: 'Hữu cơ',
    thumbnail: '/images/blogs/post-0002/thumbnail.jpg',
    hero: '/images/blogs/post-0002/hero.jpg',
  },
  {
    id: 'post-0003',
    title: 'Ăn cam mỗi ngày có tốt không? Ai nên lưu ý?',
    slug: 'an-cam-moi-ngay-co-tot-khong-ai-nen-luu-y',
    excerpt:
      'Cam tốt nhưng không phải ai cũng dùng giống nhau. Người đau dạ dày, tiểu đường, trẻ nhỏ… nên chú ý cách ăn và thời điểm.',
    date: '2025-12-26',
    tag: 'Sức khoẻ',
    thumbnail: '/images/blogs/post-0003/thumbnail.jpg',
    hero: '/images/blogs/post-0003/hero.jpg',
  },
  {
    id: 'post-0004',
    title: 'So sánh Vitamin C: cam sành và các thực phẩm “giàu C” như ổi, việt quất…',
    slug: 'so-sanh-vitamin-c-cam-sanh-oi-viet-quat',
    excerpt:
      'Cam sành nổi bật vì dễ dùng mỗi ngày. Bài viết so sánh Vitamin C giữa cam sành và một số thực phẩm giàu C (ổi, việt quất…), kèm gợi ý ăn/uống hợp lý.',
    date: '2026-01-05',
    tag: 'Dinh dưỡng',
    thumbnail: '/images/blogs/post-0004/thumbnail.jpg',
    hero: '/images/blogs/post-0004/hero.jpg',
  },
]
