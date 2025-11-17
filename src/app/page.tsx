'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ChevronRight, ShoppingCart, Leaf, Phone, MessageCircle, Facebook } from 'lucide-react'

const containerClass = 'max-w-6xl mx-auto px-4 md:px-6'

// cubic-bezier thay cho 'easeOut' để hợp TypeScript
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Variants tái sử dụng
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export default function HomePage() {
  const products = [
    {
      name: 'Cam sành hữu cơ loại I',
      desc: 'Trái to, vỏ mỏng, ngọt thanh, canh tác 100% theo tiêu chuẩn hữu cơ.',
      price: '65.000đ / kg',
      img: '/images/products/orange-1.jpg',
    },
    {
      name: 'Nước ép cam sành tươi',
      desc: 'Ép lạnh từ cam sành hữu cơ, giữ trọn vitamin C, không chất bảo quản.',
      price: '35.000đ / chai 330ml',
      img: '/images/products/orange-2.jpg',
    },
    {
      name: 'Mứt cam sành nguyên vỏ',
      desc: 'Mứt cam sành dẻo, ít đường, giữ hương thơm tự nhiên của vỏ cam.',
      price: '75.000đ / hũ 250g',
      img: '/images/products/orange-3.jpg',
    },
  ]

  return (
    <main className="">
      {/* SECTION 1: HERO BANNER (bg cam nhạt) */}
      <section className="bg-orange-50/70">
        <div className={`${containerClass} pt-10 pb-12`}>
          <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-8 items-center">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs md:text-sm tracking-wide uppercase text-orange-600 font-semibold">
                Cam sành hữu cơ - Sạch từ vườn đến bàn
              </p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                Cam sành hữu cơ cho gia đình khỏe mạnh mỗi ngày
              </h1>
              <p className="mt-4 text-slate-600 max-w-prose">
                Cam được trồng theo hướng hữu cơ, không thuốc trừ sâu hóa học, không phân bón vô cơ,
                thu hoạch đúng vụ. Vị ngọt thanh, mọng nước, an tâm cho cả nhà từ người lớn đến trẻ
                nhỏ.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-white px-4 py-2 text-sm font-medium hover:bg-orange-600 transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Đặt cam ngay hôm nay
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:underline"
                >
                  Tìm hiểu quy trình hữu cơ
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-xs md:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm">
                    <Leaf className="w-3.5 h-3.5 text-orange-500" />
                  </span>
                  Không thuốc trừ sâu hóa học
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm">
                    <Leaf className="w-3.5 h-3.5 text-orange-500" />
                  </span>
                  Thu hoạch trong ngày
                </div>
              </div>
            </motion.div>

            {/* Banner image / carousel placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-md ring-4 ring-orange-100/70 bg-white">
                {/* Bạn có thể thay sau bằng carousel nếu muốn */}
                <Image
                  src="/images/banner-orange-1.png"
                  alt="Giỏ cam sành hữu cơ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-6 hidden md:block rounded-xl bg-white/80 backdrop-blur px-4 py-2 shadow-sm border border-orange-100 text-xs text-slate-700">
                Thu hoạch buổi sáng · Giao trong ngày (nội thành)
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GIỚI THIỆU CAM HỮU CƠ (bg trắng) */}
      <section className="bg-white">
        <div className={`${containerClass} py-12 md:py-16`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Cam sành hữu cơ – trọn vị thiên nhiên trong từng tép
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Vườn cam được chăm sóc theo tiêu chuẩn hữu cơ: sử dụng phân hữu cơ ủ hoai mục, chế
                phẩm sinh học và biện pháp sinh học để phòng trừ sâu bệnh. Đất được nghỉ luân canh,
                tưới nước sạch và hoàn toàn không dùng thuốc diệt cỏ.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Mỗi trái cam đều được tuyển lựa kỹ, thu hoạch đúng độ chín, bảo quản tự nhiên, giữ
                lại vỏ xanh đẹp mắt và múi cam mọng nước. Quy trình từ vườn đến tay người dùng được
                kiểm soát chặt chẽ để đảm bảo tính an toàn và độ tươi ngon.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Đây là lựa chọn lý tưởng cho gia đình muốn giảm bớt hóa chất trong bữa ăn, bổ sung
                vitamin C tự nhiên, tăng đề kháng cho người lớn tuổi và trẻ em.
              </p>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-white px-4 py-2 text-sm font-medium hover:bg-orange-600 transition"
                >
                  Xem chi tiết quy trình hữu cơ
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative col-span-2 aspect-[16/9] rounded-2xl overflow-hidden bg-orange-50 border border-orange-100">
                <Image
                  src="/images/orange-garden-1.jpg"
                  alt="Vườn cam sành hữu cơ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-orange-50 border border-orange-100">
                <Image
                  src="/images/orange-garden-2.jpg"
                  alt="Cận cảnh trái cam sành hữu cơ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 260px"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-orange-50 border border-orange-100">
                <Image
                  src="/images/orange-garden-3.jpg"
                  alt="Thu hoạch cam sành"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 260px"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SẢN PHẨM TỪ CAM (bg cam rất nhạt) */}
      <section className="bg-orange-50/60">
        <div className={`${containerClass} py-12 md:py-16`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Sản phẩm từ cam sành hữu cơ
              </h2>
              <p className="mt-3 text-slate-600 max-w-xl">
                Từ trái cam sành hữu cơ, chúng tôi tạo ra nhiều sản phẩm tiện lợi: cam tươi, nước
                ép, mứt, phù hợp cho sinh hoạt hằng ngày, biếu tặng hoặc dùng trong sự kiện.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:underline"
              >
                Xem thêm sản phẩm
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeInUp}
                className="flex flex-col rounded-2xl border border-orange-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] bg-orange-50">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{p.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-orange-600">{p.price}</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-white px-4 py-2 text-sm font-medium hover:bg-orange-600 transition"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Đặt hàng ngay
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:underline"
            >
              Xem thêm sản phẩm
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: THÔNG TIN ĐẶT MUA (bg trắng) */}
      <section className="bg-white">
        <div className={`${containerClass} py-12 md:py-16`}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Đặt cam sành hữu cơ dễ dàng
            </h2>
            <p className="mt-3 text-slate-600">
              Bạn có thể đặt mua qua điện thoại, Zalo, Facebook hoặc đặt online trực tiếp trên
              website. Chúng tôi sẽ liên hệ xác nhận và giao hàng trong thời gian sớm nhất.
            </p>
          </motion.div>

          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 flex items-start gap-3"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                <Phone className="w-4 h-4 text-orange-500" />
              </span>
              <div className="text-sm text-slate-700 text-left">
                <p className="font-semibold">Gọi trực tiếp</p>
                <p className="mt-1">SĐT: 09xx xxx xxx</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 flex items-start gap-3"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                <MessageCircle className="w-4 h-4 text-orange-500" />
              </span>
              <div className="text-sm text-slate-700 text-left">
                <p className="font-semibold">Zalo / Chat</p>
                <p className="mt-1">Zalo: kết bạn SĐT trên</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-orange-100 bg-orange-50/70 p-4 flex items-start gap-3"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                <Facebook className="w-4 h-4 text-orange-500" />
              </span>
              <div className="text-sm text-slate-700 text-left">
                <p className="font-semibold">Fanpage Facebook</p>
                <p className="mt-1">Link fanpage sẽ đặt tại đây</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-orange-600 transition"
            >
              Đặt online ngay
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
