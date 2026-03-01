import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vensuretechnologies.in'),
  title: 'Vensure Technologies — IT Solutions & Digital Services',
  description: 'We design, develop, and support digital products — from high-performance websites to enterprise IT systems that keep your business running 24/7.',
  keywords: 'IT solutions, web development, digital services, IT support, cloud integration, website design, enterprise systems',
  authors: [{ name: 'Vensure Technologies' }],
  creator: 'Vensure Technologies',
  publisher: 'Vensure Technologies',
  robots: 'index, follow',
  openGraph: {
    title: 'Vensure Technologies — IT Solutions & Digital Services',
    description: 'Professional IT solutions, web development, and digital services for modern businesses.',
    url: 'https://vensuretechnologies.in',
    siteName: 'Vensure Technologies',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Vensure Technologies'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vensure Technologies — IT Solutions & Digital Services',
    description: 'Professional IT solutions, web development, and digital services for modern businesses.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vensuretechnologies.in" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
