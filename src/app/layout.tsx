import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'grapesjs/dist/css/grapes.min.css'
import NavbarLeft from '@/components/NavbarLeft'
import HeaderTop from '@/components/HeaderTop'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cam Sành Hữu Cơ - Organic Orange',
  description: 'Organic Orange website',
  icons: {
    icon: '/favicon.ico',
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
      </body>
    </html>
  )
}
