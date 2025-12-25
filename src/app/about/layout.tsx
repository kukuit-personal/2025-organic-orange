import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cam Hữu Cơ | Quy trình trồng cam sành hữu cơ & câu chuyện vườn cam',
  description:
    'Tìm hiểu quy trình canh tác cam sành hữu cơ tại vườn Vĩnh Long: không thuốc trừ sâu hóa học, không thuốc diệt cỏ, dùng phân hữu cơ & biện pháp sinh học. Cam hữu cơ sạch, giàu vitamin C.',
  keywords: [
    'cam hữu cơ',
    'cam sành hữu cơ',
    'cam huu co',
    'cam sanh huu co',
    'quy trình cam hữu cơ',
    'vườn cam hữu cơ',
    'vitamin c',
    'cam sạch',
    'canh tác hữu cơ',
  ],
  alternates: {
    canonical: 'https://camhuuco.vn/about',
  },
  openGraph: {
    title: 'Cam Hữu Cơ | Câu chuyện vườn cam sành hữu cơ',
    description:
      'Hành trình từ vườn đến bàn: quy trình trồng & chăm sóc cam sành hữu cơ, an toàn cho gia đình, giàu vitamin C.',
    url: 'https://camhuuco.vn/about',
    siteName: 'Cam Hữu Cơ',
    images: [
      {
        url: 'https://camhuuco.vn/images/about/hero-vuon-cam.jpg',
        width: 1200,
        height: 630,
        alt: 'Vườn cam sành hữu cơ - Cam Hữu Cơ',
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
