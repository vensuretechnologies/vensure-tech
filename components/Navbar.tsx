'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Free Consultation Modal Component
function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    teamSize: '',
    serviceType: '',
    projectTimeline: '',
    budget: '',
    preferredTime: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^[+]?[0-9\s-()]{10,}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number'
    if (!formData.serviceType.trim()) newErrors.serviceType = 'Please select a service'
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Please select preferred time'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Consultation request submitted:', formData)
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        teamSize: '',
        serviceType: '',
        projectTimeline: '',
        budget: '',
        preferredTime: '',
        message: ''
      })
      
      alert('Consultation booked successfully! We\'ll contact you within 2 hours to confirm the details.')
      onClose()
    } catch (error) {
      alert('Failed to book consultation. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border border-purple-glow/20 rounded-lg">
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-purple-glow/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-2xl gradient-text">
                Book Free Consultation
              </h2>
              <p className="text-white/60 text-sm mt-1">
                30-minute strategy session • No commitment required
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.firstName ? 'border-red-500' : 'border-purple-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-purple-glow/60 focus:outline-none transition-colors`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.lastName ? 'border-red-500' : 'border-purple-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-purple-glow/60 focus:outline-none transition-colors`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-purple-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-purple-glow/60 focus:outline-none transition-colors`}
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-purple-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-purple-glow/60 focus:outline-none transition-colors`}
                placeholder="+91 9876543210"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Business Information */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Business Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-glow/20 rounded-lg text-white placeholder-white/40 focus:border-purple-glow/60 focus:outline-none transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-purple-glow/20 rounded-lg text-white focus:border-purple-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white"
                >
                  <option value="" className="bg-surface text-white">Select industry</option>
                  <option value="technology" className="bg-surface text-white">Technology</option>
                  <option value="healthcare" className="bg-surface text-white">Healthcare</option>
                  <option value="finance" className="bg-surface text-white">Finance</option>
                  <option value="education" className="bg-surface text-white">Education</option>
                  <option value="retail" className="bg-surface text-white">Retail & E-commerce</option>
                  <option value="manufacturing" className="bg-surface text-white">Manufacturing</option>
                  <option value="consulting" className="bg-surface text-white">Consulting</option>
                  <option value="other" className="bg-surface text-white">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Project Requirements</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Service Needed *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${errors.serviceType ? 'border-red-500' : 'border-purple-glow/20'} rounded-lg text-white focus:border-purple-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white`}
                >
                  <option value="" className="bg-surface text-white">Select a service</option>
                  <option value="website-development" className="bg-surface text-white">Website Development</option>
                  <option value="ecommerce-solution" className="bg-surface text-white">E-commerce Solution</option>
                  <option value="ui-ux-design" className="bg-surface text-white">UI/UX Design</option>
                  <option value="it-support" className="bg-surface text-white">IT Support & Management</option>
                  <option value="cloud-services" className="bg-surface text-white">Cloud Services</option>
                  <option value="digital-transformation" className="bg-surface text-white">Digital Transformation</option>
                  <option value="multiple-services" className="bg-surface text-white">Multiple Services</option>
                </select>
                {errors.serviceType && <p className="text-red-400 text-xs mt-1">{errors.serviceType}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-glow/20 rounded-lg text-white focus:border-purple-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white"
                  >
                    <option value="" className="bg-surface text-white">Select timeline</option>
                    <option value="asap" className="bg-surface text-white">ASAP (Rush project)</option>
                    <option value="1-month" className="bg-surface text-white">Within 1 month</option>
                    <option value="2-3-months" className="bg-surface text-white">2-3 months</option>
                    <option value="3-6-months" className="bg-surface text-white">3-6 months</option>
                    <option value="6-months-plus" className="bg-surface text-white">6+ months</option>
                    <option value="flexible" className="bg-surface text-white">Flexible timeline</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-purple-glow/20 rounded-lg text-white focus:border-purple-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white"
                  >
                    <option value="" className="bg-surface text-white">Select budget</option>
                    <option value="under-1l" className="bg-surface text-white">Under ₹1,00,000</option>
                    <option value="1l-3l" className="bg-surface text-white">₹1,00,000 - ₹3,00,000</option>
                    <option value="3l-5l" className="bg-surface text-white">₹3,00,000 - ₹5,00,000</option>
                    <option value="5l-10l" className="bg-surface text-white">₹5,00,000 - ₹10,00,000</option>
                    <option value="10l-plus" className="bg-surface text-white">Above ₹10,00,000</option>
                    <option value="discuss" className="bg-surface text-white">Let's discuss</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Preferences */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Consultation Preferences</h3>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Preferred Time *
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.preferredTime ? 'border-red-500' : 'border-purple-glow/20'} rounded-lg text-white focus:border-purple-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white`}
              >
                <option value="" className="bg-surface text-white">Select preferred time</option>
                <option value="morning-9-12" className="bg-surface text-white">Morning (9:00 AM - 12:00 PM)</option>
                <option value="afternoon-12-4" className="bg-surface text-white">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="evening-4-7" className="bg-surface text-white">Evening (4:00 PM - 7:00 PM)</option>
                <option value="flexible" className="bg-surface text-white">Flexible (Any time)</option>
              </select>
              {errors.preferredTime && <p className="text-red-400 text-xs mt-1">{errors.preferredTime}</p>}
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Tell us about your project (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-purple-glow/20 rounded-lg text-white placeholder-white/40 focus:border-purple-glow/60 focus:outline-none transition-colors resize-none"
              placeholder="Describe your project goals, challenges, and what you hope to achieve..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-purple-glow/30 text-white/70 hover:text-white hover:border-purple-glow/60 transition-colors rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-purple-glow hover:bg-purple-bright text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Booking...' : 'Book Free Consultation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const links = ['Home','Services','Process','Work','Careers','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [consultationModalOpen, setConsultationModalOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('Home')
      return
    }

    const updateActiveSection = () => {
      const sections = [
        { id: 'hero', name: 'Home' },
        { id: 'services', name: 'Services' },
        { id: 'process', name: 'Process' },
        { id: 'work', name: 'Work' },
        { id: 'contact', name: 'Contact' }
      ]

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].name)
          break
        }
      }

      // Special case for hero/top
      if (window.scrollY < 100) {
        setActiveSection('Home')
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection)
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [isHomePage])

  const getActiveLinkClass = (link: string) => {
    const isActive = 
      (isHomePage && activeSection === link) ||
      (link === 'Careers' && pathname === '/careers') ||
      (link === 'Contact' && pathname === '/contact') ||
      (link === 'Privacy' && pathname === '/privacy') ||
      (link === 'Terms' && pathname === '/terms') ||
      (link === 'Cookies' && pathname === '/cookies')
    
    return isActive 
      ? 'text-purple-bright border-b-2 border-purple-bright' 
      : 'text-purple-200/60 hover:text-purple-300'
  }

  const getActiveMobileLinkClass = (link: string) => {
    const isActive = 
      (isHomePage && activeSection === link) ||
      (link === 'Careers' && pathname === '/careers') ||
      (link === 'Contact' && pathname === '/contact') ||
      (link === 'Privacy' && pathname === '/privacy') ||
      (link === 'Terms' && pathname === '/terms') ||
      (link === 'Cookies' && pathname === '/cookies')
    
    return isActive 
      ? 'text-purple-bright font-bold' 
      : 'text-purple-200/80 hover:text-purple-300'
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 sm:py-6 transition-all duration-500 ${scrolled ? 'bg-[#0e0e14]/80 backdrop-blur-xl border-b border-purple-900/30' : ''}`}>
      {/* Logo */}
      <a 
        href={isHomePage ? "#" : "/"} 
        className="flex items-center gap-3 group" 
        onClick={(e) => { 
          if (isHomePage) {
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }}
      >
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 border border-purple-500/60 rotate-45 group-hover:rotate-[50deg] transition-transform duration-300" />
          <div className="absolute inset-[6px] bg-purple-500/80 rotate-45 group-hover:rotate-[55deg] transition-transform duration-300" style={{boxShadow:'0 0 12px rgba(168,85,247,0.6)'}} />
        </div>
        <span className="font-display text-sm sm:text-base tracking-[0.15em] text-white font-bold">VENSURE TECHNOLOGIES</span>
      </a>

      {/* Links */}
      <ul className="hidden md:flex gap-10 items-center">
        {links.map(l => (
          <li key={l}>
            <a href={
                l === 'Home' ? (isHomePage ? '#' : '/') :
                l === 'Careers' ? '/careers' : 
                l === 'Contact' ? '/contact' :
                isHomePage ? `#${l.toLowerCase()}` : `/#${l.toLowerCase()}`
              }
              onClick={l === 'Home' && isHomePage ? (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } : undefined}
               className={`font-mono text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-200 relative group ${getActiveLinkClass(l)}`}>
              {l}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300 ${getActiveLinkClass(l).includes('text-purple-bright') ? 'hidden' : ''}`} />
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <button onClick={() => setConsultationModalOpen(true)} className="hidden md:flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-purple-300 border border-purple-500/50 px-5 py-2.5 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300" style={{boxShadow:'0 0 20px rgba(168,85,247,0.1)'}}>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        Get Started
      </button>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col items-center justify-center w-11 h-11 space-y-1.5 group relative touch-manipulation"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <span className={`w-6 h-0.5 bg-purple-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-purple-300 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-purple-300 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0e0e14]/95 backdrop-blur-xl md:hidden overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full px-6 py-safe">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-sm">
              {links.map(l => (
                <a
                  key={l}
                  href={
                    l === 'Home' ? (isHomePage ? '#' : '/') :
                    l === 'Careers' ? '/careers' : 
                    l === 'Contact' ? '/contact' :
                    isHomePage ? `#${l.toLowerCase()}` : `/#${l.toLowerCase()}`
                  }
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (l === 'Home' && isHomePage) {
                      e.preventDefault(); 
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`font-mono text-xl sm:text-2xl tracking-[0.2em] uppercase transition-all duration-200 py-3 px-4 rounded-lg text-center w-full touch-manipulation ${getActiveMobileLinkClass(l)} hover:bg-purple-500/10`}
                >
                  {l}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setConsultationModalOpen(true)
                }}
                className="flex items-center justify-center gap-3 font-mono text-base tracking-[0.15em] uppercase text-white bg-purple-600 border border-purple-500 px-8 py-4 rounded-lg hover:bg-purple-700 active:bg-purple-800 transition-all duration-300 mt-6 w-full touch-manipulation"
                style={{boxShadow:'0 0 20px rgba(168,85,247,0.3)'}}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Get Started
              </button>
            </div>

            {/* Close menu area */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-purple-300 hover:text-white transition-colors touch-manipulation"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Free Consultation Modal */}
      <ConsultationModal 
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </nav>
  )
}
