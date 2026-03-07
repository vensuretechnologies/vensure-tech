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
    "alternateName": "Vensure Tech",
    "url": "https://vensuretechnologies.in",
    "logo": "https://vensuretechnologies.in/logo.png",
    "description": "Leading IT solutions company in India providing professional web development, e-commerce solutions, cloud migration, and managed IT services.",
    "foundingDate": "2026",
    "address": {
      "@type": "PostalAddress", 
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7799192932",
      "contactType": "customer service",
      "email": "hello@vensuretechnologies.in",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://linkedin.com/company/vensure-technologies",
      "https://twitter.com/vensuretechh", 
      "https://github.com/vensuretech",
      "https://instagram.com/vensuretech"
    ],
    "serviceType": [
      "Website Development",
      "E-commerce Development", 
      "IT Support Services",
      "Cloud Migration",
      "UI/UX Design",
      "Managed IT Services"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Custom Website Development",
            "description": "Professional website development using React, Next.js and modern technologies"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Complete e-commerce solutions with Shopify, WooCommerce and custom platforms"
          }
        }
      ]
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
