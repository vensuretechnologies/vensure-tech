import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vensure Technologies — IT Solutions & Digital Services',
  description: 'We design, develop, and support digital products — from high-performance websites to enterprise IT systems.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
