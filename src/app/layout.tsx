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
  title: {
    default: 'Cam 7 Hùng | Cam sành hữu cơ Vĩnh Long - Giàu Vitamin C',
    template: '%s | Cam 7 Hùng',
  },
  description:
    'Cam 7 Hùng - Cam sành hữu cơ sạch từ vườn Vĩnh Long: canh tác hạn chế hóa chất, thu hoạch đúng vụ, giàu vitamin C. Đặt mua cam hữu cơ, nước ép, mứt, siro – giao nhanh trong ngày.',
  applicationName: 'Cam 7 Hùng',
  category: 'food',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Cam 7 Hùng | Cam sành hữu cơ Vĩnh Long - Giàu Vitamin C',
    description:
      'Cam 7 Hùng - Cam sành hữu cơ sạch từ vườn Vĩnh Long: thu hoạch đúng vụ, giàu vitamin C. Giao nhanh trong ngày.',
    images: ['https://camhuuco.vn/images/banner-orange-1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Nếu bạn verify Search Console bằng meta tag thì mở comment và dán mã vào
  // verification: {
  //   google: 'PASTE_YOUR_VERIFICATION_CODE_HERE',
  // },
}

export const viewport: Viewport = {
  themeColor: '#f9fafb',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://camhuuco.vn/#org',
      name: 'Cam 7 Hùng',
      alternateName: ['Cam Hữu Cơ', 'camhuuco', 'Cam sành hữu cơ Vĩnh Long'],
      url: 'https://camhuuco.vn',
      // ✅ thêm sameAs để Google nối identity brand mạnh hơn
      sameAs: [
        'https://www.facebook.com/cam7hung',
        'https://www.tiktok.com/@cam.huu.co',
        'https://www.youtube.com/@cam7hung',
      ],
      logo: {
        '@type': 'ImageObject',
        url: 'https://camhuuco.vn/icon-192-v2.png',
        width: 192,
        height: 192,
      },
      image: 'https://camhuuco.vn/images/banner-orange-1.png',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+84-981-353-619',
          contactType: 'customer service',
          areaServed: 'VN',
          availableLanguage: ['vi'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+84-838-222-902',
          contactType: 'customer service',
          areaServed: 'VN',
          availableLanguage: ['vi'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://camhuuco.vn/#website',
      url: 'https://camhuuco.vn',
      name: 'Cam 7 Hùng',
      publisher: { '@id': 'https://camhuuco.vn/#org' },
      inLanguage: 'vi-VN',
    },
    // Optional: LocalBusiness (giúp local SEO mạnh hơn). Nếu bạn chưa muốn thì có thể xoá block này.
    {
      '@type': 'LocalBusiness',
      '@id': 'https://camhuuco.vn/#local',
      name: 'Vườn Cam 7 Hùng',
      url: 'https://camhuuco.vn',
      image: 'https://camhuuco.vn/images/banner-orange-1.png',
      telephone: '+84-981-353-619',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ấp Ngãi Lộ B',
        addressCountry: 'VN',
        addressRegion: 'Vĩnh Long',
        addressLocality: 'Xã Trà Côn',
      },
      areaServed: ['Vĩnh Long', 'Miền Tây', 'TP. Hồ Chí Minh', 'Khu vực gần TP. Hồ Chí Minh'],
      parentOrganization: { '@id': 'https://camhuuco.vn/#org' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
                    <p className="mt-1">Xã Trà Côn · Tỉnh Vĩnh Long</p>
                    <p className="mt-1">Store tại TP. Hồ Chí Minh</p>
                  </div>

                  {/* Right */}
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-slate-800">Hotline:</p>
                    <p className="mt-1">0981 353 619 (Chị Diễm)</p>
                    <p className="mt-1">0838 222 902 (Anh Khang)</p>
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
