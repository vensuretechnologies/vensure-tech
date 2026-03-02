import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'

export const metadata: Metadata = {
  title: 'Privacy Policy - Vensure Technologies',
  description: 'Privacy policy explaining how Vensure Technologies collects, uses, and protects your personal information and data.',
  robots: 'index, follow'
}

export default function PrivacyPage() {
  return (
    <>
      <Cursor />
      <main className="min-h-screen bg-[#0e0e14] text-white">
        <Navbar />
      {/* Header */}
      <section className="relative pt-32 pb-16 px-6 lg:px-16">
        <div className="absolute inset-0 bg-radial-navy opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-brand-red-glow" />
            <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4rem)] leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Last updated: March 2, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-16 pb-20">
        <div className="max-w-4xl mx-auto prose prose-invert prose-red max-w-none">
          <div className="space-y-12 text-white/80 leading-relaxed">
            
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information to provide better services to our clients and website visitors. The types of information we collect include:
              </p>
              
              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Business information (company name, role, industry)</li>
                <li>Project requirements and technical specifications</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and server data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              
              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Service Delivery</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Providing IT services, web development, and digital solutions</li>
                <li>Project management and client communication</li>
                <li>Technical support and troubleshooting</li>
                <li>System maintenance and monitoring</li>
              </ul>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Business Operations</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Processing payments and managing accounts</li>
                <li>Sending service updates and important notifications</li>
                <li>Improving our services and website functionality</li>
                <li>Analyzing usage patterns and performance metrics</li>
              </ul>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Marketing and Communication</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending newsletters and service announcements (with consent)</li>
                <li>Responding to inquiries and support requests</li>
                <li>Sharing relevant industry insights and updates</li>
                <li>Conducting client satisfaction surveys</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent personal information to third parties. We may share information in the following limited circumstances:
              </p>
              
              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Service Providers</h3>
              <p className="mb-4">
                We work with trusted third-party service providers who assist in delivering our services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Payment processing services</li>
                <li>Email marketing platforms</li>
                <li>Analytics and monitoring tools</li>
                <li>Customer support systems</li>
              </ul>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Legal Requirements</h3>
              <p>
                We may disclose information when required by law or to protect our rights, property, or safety, or that of our clients or others.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                Our website uses cookies and similar technologies to enhance your experience:
              </p>
              
              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Essential Cookies</h3>
              <p className="mb-4">
                Required for website functionality, including security, navigation, and form submissions.
              </p>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Analytics Cookies</h3>
              <p className="mb-4">
                Help us understand how visitors interact with our website to improve performance and user experience.
              </p>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-6">Marketing Cookies</h3>
              <p className="mb-4">
                Enable personalized content and relevant advertising. You can opt out of these through your browser settings.
              </p>

              <div className="bg-surface p-6 rounded-lg border border-brand-red-glow/20 mt-6">
                <p className="font-semibold text-white mb-2">Cookie Control</p>
                <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">5. Data Security</h2>
              <p className="mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Encryption:</strong> Data transmission and storage using industry-standard encryption</li>
                <li><strong>Access Control:</strong> Limited access to personal data on a need-to-know basis</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Secure Infrastructure:</strong> Protected servers and databases with regular backups</li>
                <li><strong>Staff Training:</strong> Regular privacy and security training for all team members</li>
              </ul>
              <p>
                While we strive to protect your information, no internet transmission is 100% secure. We cannot guarantee absolute security but continuously work to improve our protection measures.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">6. Data Retention</h2>
              <p className="mb-4">
                We retain personal information for different periods based on the purpose:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Active Projects:</strong> Duration of project plus 2 years for support purposes</li>
                <li><strong>Client Communications:</strong> 3 years for business relationship management</li>
                <li><strong>Financial Records:</strong> 7 years for audit and tax compliance</li>
                <li><strong>Website Analytics:</strong> 26 months for performance optimization</li>
                <li><strong>Marketing Data:</strong> Until consent is withdrawn or 2 years of inactivity</li>
              </ul>
              <p>
                We regularly review and purge data that is no longer needed for legitimate business purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">7. Your Rights and Controls</h2>
              <p className="mb-4">
                You have several rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-surface p-6 rounded-lg border border-brand-red-glow/20">
                  <h4 className="font-semibold text-white mb-3">Access & Portability</h4>
                  <p className="text-sm">Request a copy of your personal data we hold and receive it in a commonly used format.</p>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-brand-red-glow/20">
                  <h4 className="font-semibold text-white mb-3">Correction</h4>
                  <p className="text-sm">Update or correct any inaccurate personal information we have about you.</p>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-brand-red-glow/20">
                  <h4 className="font-semibold text-white mb-3">Deletion</h4>
                  <p className="text-sm">Request deletion of your personal data, subject to legal and contractual obligations.</p>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-brand-red-glow/20">
                  <h4 className="font-semibold text-white mb-3">Opt-Out</h4>
                  <p className="text-sm">Unsubscribe from marketing communications at any time through email links or by contacting us.</p>
                </div>
              </div>

              <p className="mb-4">
                To exercise your rights, please contact us using the information provided below. We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">8. International Data Transfers</h2>
              <p className="mb-4">
                Our primary operations are based in India. If data is transferred internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard contractual clauses with international service providers</li>
                <li>Adequacy decisions for transfers to approved jurisdictions</li>
                <li>Additional security measures for sensitive data transfers</li>
                <li>Regular review of transfer arrangements and security measures</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">10. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">11. Policy Updates</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Post the updated policy on our website with a new effective date</li>
                <li>Notify clients of significant changes via email</li>
                <li>Maintain previous versions for reference</li>
                <li>Provide notice periods for material changes when required</li>
              </ul>
              <p>
                Continued use of our services after policy updates constitutes acceptance of the changes.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">12. Contact Us</h2>
              <p className="mb-6">
                For any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-surface p-8 rounded-lg border border-brand-red-glow/20">
                <h4 className="font-semibold text-white mb-4 text-lg">Privacy Officer - Vensure Technologies</h4>
                <div className="space-y-3">
                  <p><strong>Email:</strong> privacy@vensuretechnologies.in</p>
                  <p><strong>General Contact:</strong> hello@vensuretechnologies.in</p>
                  <p><strong>Phone:</strong> +91 7799192932</p>
                  <p><strong>Response Time:</strong> Within 2 hours during business hours</p>
                  <p><strong>Privacy Requests:</strong> Processed within 30 days</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-brand-red-glow/20">
                  <p className="text-sm text-white/70">
                    We are committed to resolving any privacy concerns promptly and transparently. 
                    Your feedback helps us improve our data protection practices.
                  </p>
                </div>
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