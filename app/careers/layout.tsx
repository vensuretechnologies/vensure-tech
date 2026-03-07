import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Vensure Technologies',
  description: 'Join Vensure Technologies and build the future of IT solutions. Explore exciting career opportunities in web development, IT support, cloud technologies, and more.',
  keywords: 'careers, jobs, IT jobs India, web developer jobs, software engineer, IT support careers, tech jobs, remote work, cloud engineer jobs, UI/UX designer jobs',
  robots: 'index, follow'
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}