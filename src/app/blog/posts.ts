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
]
