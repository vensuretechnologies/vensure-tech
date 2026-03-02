import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Contact Us - Get In Touch | Vensure Technologies',
  description: 'Contact Vensure Technologies for IT solutions, web development, and digital services. Get free consultation, quotes, and support from our expert team.',
  keywords: 'contact IT company India, web development consultation, IT support contact, free quote website, contact Vensure Technologies, technical support India',
  robots: 'index, follow'
}

export default function ContactPage() {
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
            <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Get In Touch</span>
          </div>
          
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h1>
          
          <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-2xl">
            Ready to transform your business with cutting-edge IT solutions? 
            Get in touch with our expert team for a free consultation and discover how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="relative py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3rem)] leading-tight mb-8">
                  Get In Touch
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  We're here to help with all your IT needs. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow/20 border border-brand-red-glow/30 flex items-center justify-center">
                    <span className="text-brand-red-bright text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Phone</h3>
                    <a 
                      href="tel:+917799192932"
                      className="text-brand-red-bright hover:text-brand-red-300 transition-colors text-lg"
                    >
                      +91 7799192932
                    </a>
                    <p className="text-white/60 text-sm mt-1">Mon-Sat, 9:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow/20 border border-brand-red-glow/30 flex items-center justify-center">
                    <span className="text-brand-red-bright text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Email</h3>
                    <a 
                      href="mailto:hello@vensuretechnologies.in"
                      className="text-brand-red-bright hover:text-brand-red-300 transition-colors text-lg"
                    >
                      hello@vensuretechnologies.in
                    </a>
                    <p className="text-white/60 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow/20 border border-brand-red-glow/30 flex items-center justify-center">
                    <span className="text-brand-red-bright text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Location</h3>
                    <p className="text-white/70 text-lg">India</p>
                    <p className="text-white/60 text-sm mt-1">Serving clients nationwide</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red-glow/20 border border-brand-red-glow/30 flex items-center justify-center">
                    <span className="text-brand-red-bright text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">Business Hours</h3>
                    <div className="space-y-1">
                      <p className="text-white/70">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-white/70">Saturday: 10:00 AM - 5:00 PM</p>
                      <p className="text-white/60">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', href: 'https://linkedin.com/company/vensure-technologies', icon: '💼' },
                    { name: 'Twitter', href: 'https://twitter.com/vensuretechh', icon: '🐦' },
                    { name: 'Instagram', href: 'https://instagram.com/vensuretech', icon: '📷' },
                    { name: 'GitHub', href: 'https://github.com/vensuretech', icon: '🔗' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-surface border border-brand-red-glow/20 hover:border-brand-red-glow/40 flex items-center justify-center text-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-red-glow/20"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface border border-brand-red-glow/10 rounded-lg p-8">
              <h3 className="font-display font-bold text-2xl gradient-text mb-6">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white focus:border-brand-red-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white">
                    <option value="" className="bg-surface text-white">Select a service</option>
                    <option value="web-development" className="bg-surface text-white">Website Development</option>
                    <option value="ecommerce" className="bg-surface text-white">E-commerce Solution</option>
                    <option value="ui-ux" className="bg-surface text-white">UI/UX Design</option>
                    <option value="it-support" className="bg-surface text-white">IT Support</option>
                    <option value="cloud-services" className="bg-surface text-white">Cloud Services</option>
                    <option value="consultation" className="bg-surface text-white">Consultation</option>
                    <option value="other" className="bg-surface text-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Budget
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white focus:border-brand-red-glow/60 focus:outline-none transition-colors [&>option]:bg-surface [&>option]:text-white">
                    <option value="" className="bg-surface text-white">Select budget range</option>
                    <option value="under-50k" className="bg-surface text-white">Under ₹50,000</option>
                    <option value="50k-1l" className="bg-surface text-white">₹50,000 - ₹1,00,000</option>
                    <option value="1l-3l" className="bg-surface text-white">₹1,00,000 - ₹3,00,000</option>
                    <option value="3l-5l" className="bg-surface text-white">₹3,00,000 - ₹5,00,000</option>
                    <option value="above-5l" className="bg-surface text-white">Above ₹5,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-brand-red-glow/20 rounded-lg text-white placeholder-white/40 focus:border-brand-red-glow/60 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific goals you have in mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300 animate-glow-pulse"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-16 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our IT solutions. 
            Let's discuss your project today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+917799192932"
              className="inline-flex items-center gap-3 px-10 py-5 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-brand-red-glow text-white hover:bg-brand-red-bright transition-all duration-300 animate-glow-pulse"
            >
              📞 Call Now
            </a>
            <a 
              href="mailto:hello@vensuretechnologies.in"
              className="inline-flex items-center gap-2 px-10 py-5 font-mono text-sm font-semibold tracking-[0.15em] uppercase border border-brand-red-glow/30 text-white/70 hover:text-brand-red-bright hover:border-brand-red-glow/60 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-brand-red-glow/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                  Response Time
                </h4>
                <span className="text-white/70">Within 24 hours</span>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                  Free Consultation
                </h4>
                <span className="text-white/70">Always included</span>
              </div>
              <div>
                <h4 className="font-mono text-xs tracking-wider uppercase text-brand-red-bright/70 mb-2">
                  Support
                </h4>
                <span className="text-white/70">24/7 Technical assistance</span>
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
    </main>
    </>
  )
}
