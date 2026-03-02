import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Vensure Technologies',
  description: 'Terms and conditions for IT services, web development, and digital solutions provided by Vensure Technologies.',
  robots: 'index, follow'
}

export default function TermsPage() {
  return (
    <>
      <Cursor />
      <main className="min-h-screen bg-[#0e0e14] text-white">
        <Navbar />
      {/* Header */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16">
        <div className="absolute inset-0 bg-radial-purple opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-purple-glow" />
            <span className="font-mono text-xs tracking-[0.25em] text-purple-bright/70 uppercase">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4rem)] leading-tight mb-6">
            Terms and Conditions
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Last updated: March 2, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto prose prose-invert prose-purple max-w-none">
          <div className="space-y-12 text-white/80 leading-relaxed">
            
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms and Conditions ("Terms") govern your use of the website operated by Vensure Technologies ("we," "us," or "our") and the services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree with any part of these Terms, you must not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">2. Services Provided</h2>
              <p className="mb-4">
                Vensure Technologies provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Custom website development and design</li>
                <li>UI/UX design services</li>
                <li>E-commerce solution development</li>
                <li>IT support and helpdesk services</li>
                <li>Managed IT services and system monitoring</li>
                <li>Cloud migration and system integration</li>
                <li>Digital marketing and SEO optimization</li>
              </ul>
              <p>
                Service specifications, timelines, and pricing are detailed in individual service agreements or project proposals.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">3. Client Responsibilities</h2>
              <p className="mb-4">
                Clients agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information required for service delivery</li>
                <li>Respond promptly to requests for feedback and approvals</li>
                <li>Provide necessary access to systems, platforms, and content</li>
                <li>Make timely payments according to agreed terms</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">4. Payment Terms</h2>
              <div className="space-y-4">
                <p>
                  <strong>Payment Schedule:</strong> Payment terms are specified in individual service agreements. Generally, we require 50% payment upfront for new projects, with the remainder due upon completion.
                </p>
                <p>
                  <strong>Late Payments:</strong> Invoices not paid within 30 days of the due date may incur a late fee of 2% per month or the maximum allowed by law.
                </p>
                <p>
                  <strong>Refunds:</strong> Refunds are handled on a case-by-case basis according to the specific service agreement and work completed.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">5. Intellectual Property</h2>
              <div className="space-y-4">
                <p>
                  <strong>Client Content:</strong> Clients retain ownership of their existing intellectual property, content, and data provided to us.
                </p>
                <p>
                  <strong>Deliverables:</strong> Upon full payment, clients receive ownership of custom-developed websites, applications, and designs created specifically for them.
                </p>
                <p>
                  <strong>Third-Party Tools:</strong> Some projects may use third-party software, plugins, or services that remain property of their respective owners.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">6. Website Maintenance and Support</h2>
              <p className="mb-4">
                Post-launch support and maintenance services are available through separate agreements. Basic support may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Security updates and patches</li>
                <li>Content management system updates</li>
                <li>Performance optimization</li>
                <li>Technical troubleshooting</li>
                <li>Backup management</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Vensure Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
              <p>
                Our total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">8. Termination</h2>
              <p className="mb-4">
                Either party may terminate a service agreement with written notice. Termination terms, including deliverables and refunds for work completed, are specified in individual service agreements.
              </p>
              <p>
                We reserve the right to terminate services immediately if clients breach these Terms or engage in illegal activities.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">9. Privacy and Data Protection</h2>
              <p>
                Our collection and use of personal information is governed by our Privacy Policy. We are committed to protecting client data and complying with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">10. Force Majeure</h2>
              <p>
                We shall not be liable for any delay or failure to perform due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, government actions, or technical failures.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes arising from these Terms or our services shall be resolved through binding arbitration in India.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">12. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">13. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms or our services, please contact us:
              </p>
              <div className="bg-surface p-6 rounded-lg border border-purple-glow/20">
                <p className="mb-2"><strong>Email:</strong> hello@vensuretechnologies.in</p>
                <p className="mb-2"><strong>Phone:</strong> +91 7799192932</p>
                <p><strong>Response Time:</strong> Within 2 hours during business hours</p>
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
            className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-semibold tracking-[0.15em] uppercase bg-purple-glow text-white hover:bg-purple-bright transition-all duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
    </>
  )
}