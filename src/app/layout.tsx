import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'grapesjs/dist/css/grapes.min.css'
import HeaderTop from '@/components/HeaderTop'
import Providers from './providers'
import ChatWidget from '@/components/ChatWidget'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cam 7 Hùng | Cam sành hữu cơ Vĩnh Long - Giàu Vitamin C',
  description:
    'Cam 7 Hùng - Cam sành hữu cơ sạch từ vườn Vĩnh Long: canh tác hạn chế hóa chất, thu hoạch đúng vụ, giàu vitamin C. Đặt mua cam hữu cơ, nước ép, mứt, siro – giao nhanh trong ngày.',
  keywords: [
    // Ưu tiên đúng các keyword bạn yêu cầu
    'cam 7 hùng',
    'cam 7 hung',
    'cam hữu cơ',
    'cam sanh hữu cơ',
    'cam sành hữu cơ',
    'cam vĩnh long',
    'cam sanh vĩnh long',
    'cam sành vĩnh long',

    // bổ trợ liên quan
    'vitamin c',
    'cam sạch',
    'nước ép cam',
    'sản phẩm từ cam',
    'cam vườn',
    'cam sành',
    'đặt mua cam vĩnh long',
  ],
  icons: {
    icon: [
      { url: '/favicon-20260112.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32-v2.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48-v2.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96-v2.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192-v2.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon-20260112.ico' }],
    apple: [{ url: '/apple-touch-icon-v2.png', sizes: '180x180', type: 'image/png' }],
  },
  metadataBase: new URL('https://camhuuco.vn'),
  alternates: {
    canonical: 'https://camhuuco.vn',
  },
  openGraph: {
    title: 'Cam 7 Hùng | Cam sành hữu cơ Vĩnh Long - Giàu Vitamin C',
    description:
      'Cam 7 Hùng - Cam sành hữu cơ sạch từ vườn Vĩnh Long: thu hoạch đúng vụ, giàu vitamin C. Giao nhanh trong ngày.',
    url: 'https://camhuuco.vn',
    siteName: 'Cam 7 Hùng',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: 'https://camhuuco.vn/images/banner-orange-1.png',
        width: 1200,
        height: 630,
        alt: 'Cam 7 Hùng - Cam sành hữu cơ Vĩnh Long',
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
    <html lang="vi" suppressHydrationWarning>
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
              <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 text-sm text-slate-600">
                <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-10 md:gap-16">
                  {/* Left */}
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-slate-800">Vườn Cam 7 Hùng</p>
                    <p className="mt-1">Xã Hòa Bình · Tỉnh Vĩnh Long</p>
                    <p className="mt-1">Store tại TP. Hồ Chí Minh</p>
                  </div>

                  {/* Right */}
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-slate-800">Hotline:</p>
                    <p className="mt-1">0981 353 619 (Diễm)</p>
                    <p className="mt-1">0838 222 902 (Khang)</p>
                  </div>
                </div>
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
