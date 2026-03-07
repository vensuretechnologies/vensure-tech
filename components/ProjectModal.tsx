'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:hello@vensuretechnologies.in?subject=New Project Inquiry from ${formData.name}&body=${encodeURIComponent(emailBody)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Close modal
    onClose()
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#0e0e14] border border-brand-red-glow/20 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="font-display font-bold text-3xl gradient-text mb-2">Start a Project</h2>
          <p className="text-white/60 font-body">Tell us about your project and we'll get back to you within 2 hours.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white placeholder-white/30 focus:border-brand-red-glow focus:outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white placeholder-white/30 focus:border-brand-red-glow focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white placeholder-white/30 focus:border-brand-red-glow focus:outline-none transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white placeholder-white/30 focus:border-brand-red-glow focus:outline-none transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white focus:border-brand-red-glow focus:outline-none transition-colors"
              >
                <option value="">Select project type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white focus:border-brand-red-glow focus:outline-none transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under ₹50,000</option>
                <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                <option value="1l-2l">₹1,00,000 - ₹2,00,000</option>
                <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                <option value="above-5l">Above ₹5,00,000</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white focus:border-brand-red-glow focus:outline-none transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full bg-[#1a1a2e] border border-brand-red-glow/20 rounded px-4 py-3 text-white placeholder-white/30 focus:border-brand-red-glow focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project, features you need, any specific requirements..."
            />
          </div>

          {/* Submit button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 group inline-flex items-center justify-center gap-3 px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300 animate-glow-pulse"
            >
              Send Project Details
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 font-body text-sm font-semibold tracking-widest uppercase border border-brand-red-glow/30 text-white/50 hover:text-brand-red-bright hover:border-brand-red-glow/60 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
