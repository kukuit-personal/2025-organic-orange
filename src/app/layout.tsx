import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'grapesjs/dist/css/grapes.min.css'
import NavbarLeft from '@/components/NavbarLeft'
import HeaderTop from '@/components/HeaderTop'
import Providers from './providers'
import ChatWidget from '@/components/ChatWidget'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cam Hữu Cơ | Mang vitamin C đến với mọi nhà',
  description:
    'Cam sành hữu cơ sạch từ vườn Vĩnh Long: không thuốc trừ sâu hóa học, thu hoạch đúng vụ, giàu vitamin C. Đặt mua cam hữu cơ, nước ép, mứt, siro – giao nhanh trong ngày.',
  keywords: [
    'cam hữu cơ',
    'cam sành hữu cơ',
    'cam huu co',
    'cam sanh huu co',
    'vitamin c',
    'cam sạch',
    'nước ép cam hữu cơ',
    'sản phẩm từ cam',
    'cam Vĩnh Long',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://camhuuco.vn',
  },
  openGraph: {
    title: 'Cam Hữu Cơ | Cam sành hữu cơ sạch - giàu Vitamin C',
    description:
      'Cam sành hữu cơ sạch từ vườn: không hóa chất, thu hoạch đúng vụ, giàu vitamin C. Giao nhanh trong ngày.',
    url: 'https://camhuuco.vn',
    siteName: 'Cam Hữu Cơ',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://camhuuco.vn/images/banner-orange-1.png',
        width: 1200,
        height: 630,
        alt: 'Cam sành hữu cơ - Cam Hữu Cơ',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#f9fafb',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex relative">
          <input id="nav-toggle" type="checkbox" className="peer sr-only" />

          {/* <NavbarLeft /> */}

          <div className="flex-1 flex flex-col">
            <HeaderTop />
            <div>
              <Providers>{children}</Providers>
            </div>

            {/* FOOTER thông tin vườn */}
            <footer className="bg-orange-50/20 border-t border-orange-100">
              <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-center text-sm text-slate-600">
                <p className="font-semibold text-slate-700">Vườn cam sành hữu cơ</p>
                <p className="mt-1">Xã Hòa Bình - Huyện Trà Ôn - Tỉnh Vĩnh Long</p>
                <p className="mt-1">Store ở TP. Hồ Chí Minh</p>
              </div>
            </footer>
          </div>

          <label
            htmlFor="nav-toggle"
            className="fixed inset-0 bg-black/30 z-40 hidden peer-checked:block sm:hidden"
            aria-hidden="true"
          />
        </div>

        <ChatWidget />

        <GoogleAnalytics gaId="G-2EF1HMW0BP" />
      </body>
    </html>
  )
}
