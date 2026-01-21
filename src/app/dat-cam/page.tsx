import { FloatingActions } from './_page/FloatingActions'
import { HeroSection } from './_page/HeroSection'
import { PricingSection } from './_page/PricingSection'
import { TrustFaqSection } from './_page/TrustFaqSection'
import { OrderForm } from './_page/OrderForm'

export default function DatCamPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF7] text-slate-900">
      <FloatingActions />
      <HeroSection />
      <PricingSection />
      <TrustFaqSection />
      <OrderForm />
    </main>
  )
}
