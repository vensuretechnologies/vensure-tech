'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3-5 years',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    urgent: true,
    description: 'Lead development of complex web applications using modern technologies. Work with cross-functional teams to deliver high-quality solutions for our enterprise clients.'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2-4 years',
    skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
    urgent: false,
    description: 'Create intuitive and beautiful user experiences for web and mobile applications. Collaborate with developers and product managers to bring designs to life.'
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3-6 years',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    urgent: true,
    description: 'Build and maintain scalable cloud infrastructure. Implement automated deployment pipelines and ensure system reliability and security.'
  },
  {
    id: 4,
    title: 'IT Support Specialist',
    department: 'Support',
    location: 'Remote / On-site',
    type: 'Full-time',
    experience: '1-3 years',
    skills: ['Windows/Linux', 'Network Administration', 'Troubleshooting', 'ITIL', 'Customer Service'],
    urgent: false,
    description: 'Provide technical support to clients and internal teams. Diagnose and resolve hardware, software, and network issues efficiently.'
  },
  {
    id: 5,
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '2-5 years',
    skills: ['Sales', 'CRM', 'Lead Generation', 'Client Relations', 'Market Research'],
    urgent: false,
    description: 'Drive business growth by identifying new opportunities, building client relationships, and developing strategic partnerships in the IT services sector.'
  },
  {
    id: 6,
    title: 'Junior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '0-2 years',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
    urgent: false,
    description: 'Start your career in web development by building modern, responsive user interfaces. Perfect opportunity for fresh graduates and career changers.'
  }
]

const benefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description: 'Market-leading compensation packages with performance bonuses and annual increments.'
  },
  {
    icon: '🏠',
    title: 'Remote Work Flexibility',
    description: 'Work from anywhere in India with flexible hours and hybrid office options.'
  },
  {
    icon: '📚',
    title: 'Learning & Development',
    description: 'Annual learning budget for courses, certifications, and conference attendance.'
  },
  {
    icon: '⚕️',
    title: 'Health & Wellness',
    description: 'Comprehensive medical insurance for you and your family plus wellness programs.'
  },
  {
    icon: '🚀',
    title: 'Career Growth',
    description: 'Clear career paths with mentorship programs and leadership development opportunities.'
  },
  {
    icon: '🎯',
    title: 'Cutting-edge Projects',
    description: 'Work on innovative projects using the latest technologies and industry best practices.'
  },
  {
    icon: '🎉',
    title: 'Team Culture',
    description: 'Collaborative environment with team outings, celebrations, and recognition programs.'
  },
  {
    icon: '⏰',
    title: 'Work-Life Balance',
    description: 'Generous PTO, flexible schedules, and support for personal development.'
  }
]

// Application Modal Component
function ApplicationModal({ isOpen, onClose, selectedJob }: { isOpen: boolean; onClose: () => void; selectedJob?: any }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    message: '',
    resume: null as File | null
  })

  // Update form data when selectedJob changes
  useEffect(() => {
    if (selectedJob) {
      setFormData(prev => ({
        ...prev,
        position: selectedJob.title,
        experience: selectedJob.experience
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        position: '',
        experience: ''
      }))
    }
  }, [selectedJob])

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, resume: file }))
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^[+]?[0-9\s-()]{10,}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number'
    if (!formData.position.trim()) newErrors.position = 'Position is required'
    if (!formData.experience.trim()) newErrors.experience = 'Experience level is required'
    if (!formData.resume) newErrors.resume = 'Resume is required'
    else if (formData.resume.size > 5 * 1024 * 1024) newErrors.resume = 'Resume must be less than 5MB'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      
      // Reset form and close modal
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        portfolio: '',
        linkedin: '',
        message: '',
        resume: null
      })
      
      alert('Application submitted successfully! We\'ll get back to you within 48 hours.')
      onClose()
    } catch (error) {
      alert('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-surface border border-brand-red-glow/20 rounded-lg">
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-brand-red-glow/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-2xl gradient-text">
                Apply for Position
              </h2>
              {selectedJob && (
                <p className="text-white/60 text-sm mt-1">
                  {selectedJob.title} • {selectedJob.department}
                </p>
              )}
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
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-brand-red-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-brand-red-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-brand-red-glow/20'} rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors`}
                placeholder="+91 9876543210"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Position Applying For *
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.position ? 'border-red-500' : 'border-brand-red-glow/20'} rounded-lg text-white focus:border-brand-red-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white [&>option]:py-2`}
              >
                <option value="" className="bg-surface text-white">Select a position</option>
                {jobOpenings.map(job => (
                  <option key={job.id} value={job.title} className="bg-surface text-white">
                    {job.title}
                  </option>
                ))}
                <option value="Other" className="bg-surface text-white">Other Position</option>
              </select>
              {errors.position && <p className="text-red-400 text-xs mt-1">{errors.position}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Experience Level *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-white/5 border ${errors.experience ? 'border-red-500' : 'border-brand-red-glow/20'} rounded-lg text-white focus:border-brand-red-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white [&>option]:py-2`}
              >
                <option value="" className="bg-surface text-white">Select experience</option>
                <option value="0-1 years" className="bg-surface text-white">0-1 years (Fresher)</option>
                <option value="1-3 years" className="bg-surface text-white">1-3 years</option>
                <option value="3-5 years" className="bg-surface text-white">3-5 years</option>
                <option value="5-8 years" className="bg-surface text-white">5-8 years</option>
                <option value="8+ years" className="bg-surface text-white">8+ years</option>
              </select>
              {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Portfolio/Website
            </label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
              placeholder="https://yourportfolio.com"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Resume/CV * (PDF, DOC, DOCX - Max 5MB)
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className={`flex items-center gap-3 w-full px-4 py-3 bg-white/5 border ${errors.resume ? 'border-red-500' : 'border-brand-red-glow/20'} rounded-lg text-white cursor-pointer hover:border-brand-red-glow/60 transition-colors`}
              >
                <span className="text-brand-red-bright">📎</span>
                <span className="text-white/60">
                  {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                </span>
              </label>
            </div>
            {errors.resume && <p className="text-red-400 text-xs mt-1">{errors.resume}</p>}
          </div>

          {/* Cover Message */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Cover Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors resize-none"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-brand-red-glow/30 text-white/70 hover:text-white hover:border-brand-red-glow/60 transition-colors rounded-lg font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-brand-red-glow hover:bg-brand-red-bright text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const openModal = (job?: any) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  return (
    <>
      <Cursor />
      <main className="min-h-screen bg-[#0e0e14] text-white">
        <Navbar />
      {/* Header */}
      <section className="relative pt-32 pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-radial-navy opacity-60" />
        <div className="absolute inset-0 bg-grid-navy bg-grid opacity-30" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-brand-red-glow" />
            <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Join Our Team</span>
          </div>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8">
            Build the Future of{' '}
            <span className="gradient-text">IT Solutions</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Join a dynamic team of innovators, developers, and problem-solvers. At Vensure Technologies, 
                we're not just building software — we're shaping the digital future for businesses across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#openings"
                  className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300 animate-glow-pulse"
                >
                  View Openings
                  <span>↓</span>
                </a>
                <a 
                  href="#culture"
                  className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm font-semibold tracking-[0.15em] uppercase border border-brand-red-glow/30 text-white/70 hover:text-brand-red-bright hover:border-brand-red-glow/60 transition-all duration-300"
                >
                  Learn About Us
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-brand-red-glow/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow flex items-center justify-center text-xl">
                    👥
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">50+ Team Members</h3>
                    <p className="text-white/60 text-sm">Growing across multiple departments</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-brand-red-glow/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow flex items-center justify-center text-xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">Remote-First Culture</h3>
                    <p className="text-white/60 text-sm">Flexibility with hybrid options</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface/50 backdrop-blur-sm p-6 rounded-lg border border-brand-red-glow/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow flex items-center justify-center text-xl">
                    📈
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg">Rapid Growth</h3>
                    <p className="text-white/60 text-sm">Expanding services and market reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="relative py-20 px-6 lg:px-16 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-6 h-px bg-brand-red-glow" />
              <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Open Positions</span>
              <div className="w-6 h-px bg-brand-red-glow" />
            </div>
            
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6">
              Current Openings
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're looking for passionate individuals who want to make a difference in the tech industry. 
              Find your perfect role and join our growing team.
            </p>
          </div>

          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="group bg-surface border border-brand-red-glow/10 hover:border-brand-red-glow/30 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-red-glow/10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display font-bold text-xl text-white group-hover:gradient-text transition-all duration-300">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <span className="px-2 py-1 bg-amber-600/20 text-amber-400 text-xs font-mono tracking-wider uppercase rounded">
                              Urgent
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-brand-red-glow rounded-full"></span>
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-brand-red-glow rounded-full"></span>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-brand-red-glow rounded-full"></span>
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-brand-red-glow rounded-full"></span>
                            {job.experience}
                          </span>
                        </div>
                        
                        <p className="text-white/70 leading-relaxed mb-6">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 bg-brand-red-glow/10 text-brand-red-bright/80 text-xs font-mono tracking-wider uppercase border border-brand-red-glow/20 rounded group-hover:border-brand-red-glow/40 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <button 
                      onClick={() => openModal(job)}
                      className="w-full lg:w-auto px-8 py-3 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300 whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/60 mb-6">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <button 
              onClick={() => openModal()}
              className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-semibold tracking-[0.15em] uppercase border border-brand-red-glow/30 text-white/70 hover:text-brand-red-bright hover:border-brand-red-glow/60 transition-all duration-300"
            >
              Send Your Resume
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section id="culture" className="relative py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-6 h-px bg-brand-red-glow" />
              <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Why Join Us</span>
              <div className="w-6 h-px bg-brand-red-glow" />
            </div>
            
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6">
              Benefits & Perks
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We believe in taking care of our team members with comprehensive benefits, 
              growth opportunities, and a culture that values innovation and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-surface border border-brand-red-glow/10 hover:border-brand-red-glow/30 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-red-glow/10 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:gradient-text transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative py-20 px-6 lg:px-16 bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6">
              Application Process
            </h2>
            <p className="text-white/60 text-lg">
              Our hiring process is designed to be transparent, efficient, and respectful of your time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply',
                description: 'Submit your application with resume and portfolio. We review all applications within 48 hours.'
              },
              {
                step: '02',
                title: 'Screening',
                description: 'Initial phone/video call to discuss your background, interests, and the role requirements.'
              },
              {
                step: '03',
                title: 'Interview',
                description: 'Technical and cultural fit interviews with team members and hiring managers.'
              },
              {
                step: '04',
                title: 'Offer',
                description: 'If successful, we\'ll extend an offer with competitive compensation and benefits.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-brand-red-glow bg-surface flex items-center justify-center">
                    <span className="font-mono text-sm font-bold text-brand-red-bright">
                      {step.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-brand-red-glow/30"></div>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Take the next step in your career and help us build innovative IT solutions 
            that make a real difference for businesses across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#openings"
              className="inline-flex items-center gap-3 px-10 py-5 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300 animate-glow-pulse"
            >
              Browse Open Positions
              <span>→</span>
            </a>
            <a 
              href="mailto:careers@vensuretechnologies.in?subject=General%20Career%20Inquiry"
              className="inline-flex items-center gap-2 px-10 py-5 font-mono text-sm font-semibold tracking-[0.15em] uppercase border border-brand-red-glow/30 text-white/70 hover:text-brand-red-bright hover:border-brand-red-glow/60 transition-all duration-300"
            >
              Contact HR Team
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-brand-red-glow/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                  General Inquiries
                </h4>
                <a 
                  href="mailto:careers@vensuretechnologies.in"
                  className="text-white/70 hover:text-brand-red-bright transition-colors"
                >
                  careers@vensuretechnologies.in
                </a>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                  Phone
                </h4>
                <a 
                  href="tel:+917799192932"
                  className="text-white/70 hover:text-brand-red-bright transition-colors"
                >
                  +91 7799192932
                </a>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                  Response Time
                </h4>
                <span className="text-white/70">Within 48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <section className="px-6 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedJob={selectedJob} 
      />
    </main>
    </>
  )
}
