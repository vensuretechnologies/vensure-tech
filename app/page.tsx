import Cursor       from '@/components/Cursor'
import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Marquee      from '@/components/Marquee'
import Services     from '@/components/Services'
import Process      from '@/components/Process'
import Work         from '@/components/Work'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
