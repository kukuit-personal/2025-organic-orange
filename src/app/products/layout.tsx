import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cam Hữu Cơ | Sản phẩm cam sành hữu cơ - sạch, giàu Vitamin C',
  description:
    'Danh sách sản phẩm từ cam sành hữu cơ: cam tươi, nước ép cam, mứt cam, siro cam. Cam hữu cơ sạch, giàu vitamin C, giao hàng nhanh từ vườn.',
  keywords: [
    'cam sành hữu cơ',
    'cam hữu cơ',
    'cam sanh huu co',
    'cam huu co',
    'vitamin c',
    'nước ép cam hữu cơ',
    'mứt cam hữu cơ',
    'siro cam hữu cơ',
  ],
  alternates: {
    canonical: 'https://camhuuco.vn/products',
  },
  openGraph: {
    title: 'Sản phẩm cam sành hữu cơ | Cam hữu cơ sạch',
    description:
      'Các sản phẩm từ cam sành hữu cơ: cam tươi, nước ép, mứt cam – giàu vitamin C, an toàn cho gia đình.',
    url: 'https://camhuuco.vn/products',
    siteName: 'Cam Hữu Cơ',
    images: [
      {
        url: 'https://camhuuco.vn/images/products/orange-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sản phẩm cam sành hữu cơ',
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

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
