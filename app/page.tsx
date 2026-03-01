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
import ScrollToTop  from '@/components/ScrollToTop'

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vensure Technologies",
    "url": "https://vensuretechnologies.in",
    "logo": "https://vensuretechnologies.in/logo.png",
    "description": "Professional IT solutions, web development, and digital services for modern businesses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7799192932",
      "contactType": "customer service",
      "email": "hello@vensuretechnologies.in"
    },
    "sameAs": [
      "https://linkedin.com/company/vensure-technologies",
      "https://twitter.com/vensuretechh",
      "https://github.com/vensuretech",
      "https://instagram.com/vensuretech"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "foundingDate": "2026",
    "employee": {
      "@type": "Person",
      "name": "Vensure Team"
    }
  }

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
      <ScrollToTop />
    </>
  )
}
