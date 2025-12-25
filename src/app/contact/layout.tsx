import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cam Hữu Cơ | Liên hệ & đặt cam sành hữu cơ - giao nhanh từ vườn',
  description:
    'Liên hệ đặt cam sành hữu cơ trực tiếp từ vườn Vĩnh Long. Gọi điện/Zalo/Facebook hoặc điền form đặt hàng online. Cam hữu cơ sạch, giàu vitamin C, hỗ trợ giao nhanh.',
  keywords: [
    'liên hệ cam hữu cơ',
    'đặt cam sành hữu cơ',
    'mua cam hữu cơ',
    'cam sành hữu cơ',
    'cam hữu cơ',
    'cam sanh huu co',
    'cam huu co',
    'vitamin c',
    'giao cam tươi',
    'đặt hàng cam online',
  ],
  alternates: {
    canonical: 'https://camhuuco.vn/contact',
  },
  openGraph: {
    title: 'Cam Hữu Cơ | Liên hệ đặt cam sành hữu cơ',
    description:
      'Đặt cam sành hữu cơ trực tiếp từ vườn: gọi điện/Zalo/Facebook hoặc điền form. Cam sạch, giàu vitamin C, giao nhanh.',
    url: 'https://camhuuco.vn/contact',
    siteName: 'Cam Hữu Cơ',
    images: [
      {
        // Nếu bạn có ảnh OG riêng 1200x630 thì thay link này cho đẹp khi share
        url: 'https://camhuuco.vn/images/banner-orange-1.png',
        width: 1200,
        height: 630,
        alt: 'Liên hệ đặt cam sành hữu cơ - Cam Hữu Cơ',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
