import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Cookie Policy - Vensure Technologies',
  description: 'Cookie policy explaining how Vensure Technologies uses cookies and tracking technologies on our website.',
  robots: 'index, follow'
}

export default function CookiePage() {
  return (
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
            Cookie Policy
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
              <h2 className="font-display font-bold text-2xl text-white mb-6">What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p>
                Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div className="bg-surface p-6 rounded-lg border border-purple-glow/20">
                  <h3 className="font-display font-semibold text-xl text-white mb-4">Essential Cookies</h3>
                  <p className="mb-4">
                    These cookies are necessary for our website to function properly. They cannot be switched off in our systems.
                  </p>
                  <p className="text-sm text-white/60 mb-4"><strong>Purpose:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Security and authentication</li>
                    <li>Form submission and data persistence</li>
                    <li>Load balancing and performance optimization</li>
                    <li>Basic website functionality</li>
                  </ul>
                  <p className="text-sm text-purple-bright mt-4"><strong>Duration:</strong> Session or up to 1 year</p>
                </div>

                <div className="bg-surface p-6 rounded-lg border border-purple-glow/20">
                  <h3 className="font-display font-semibold text-xl text-white mb-4">Analytics Cookies</h3>
                  <p className="mb-4">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information.
                  </p>
                  <p className="text-sm text-white/60 mb-4"><strong>Purpose:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Website traffic analysis</li>
                    <li>Page performance monitoring</li>
                    <li>User behavior insights</li>
                    <li>Feature usage statistics</li>
                  </ul>
                  <p className="text-sm text-purple-bright mt-4"><strong>Duration:</strong> Up to 26 months</p>
                </div>

                <div className="bg-surface p-6 rounded-lg border border-purple-glow/20">
                  <h3 className="font-display font-semibold text-xl text-white mb-4">Functional Cookies</h3>
                  <p className="mb-4">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                  </p>
                  <p className="text-sm text-white/60 mb-4"><strong>Purpose:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Language and region preferences</li>
                    <li>Theme and display settings</li>
                    <li>Form auto-completion</li>
                    <li>Communication preferences</li>
                  </ul>
                  <p className="text-sm text-purple-bright mt-4"><strong>Duration:</strong> Up to 1 year</p>
                </div>

                <div className="bg-surface p-6 rounded-lg border border-purple-glow/20">
                  <h3 className="font-display font-semibold text-xl text-white mb-4">Marketing Cookies</h3>
                  <p className="mb-4">
                    These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                  </p>
                  <p className="text-sm text-white/60 mb-4"><strong>Purpose:</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Personalized content delivery</li>
                    <li>Relevant service recommendations</li>
                    <li>Social media integration</li>
                    <li>Marketing campaign effectiveness</li>
                  </ul>
                  <p className="text-sm text-purple-bright mt-4"><strong>Duration:</strong> Up to 2 years</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Third-Party Cookies</h2>
              <p className="mb-4">
                Some cookies on our website are set by third-party services we use to enhance functionality:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-purple-glow/20">
                  <thead>
                    <tr className="bg-surface">
                      <th className="border border-purple-glow/20 px-4 py-3 text-left">Service</th>
                      <th className="border border-purple-glow/20 px-4 py-3 text-left">Purpose</th>
                      <th className="border border-purple-glow/20 px-4 py-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-purple-glow/20 px-4 py-3">Google Analytics</td>
                      <td className="border border-purple-glow/20 px-4 py-3">Website analytics and performance monitoring</td>
                      <td className="border border-purple-glow/20 px-4 py-3">26 months</td>
                    </tr>
                    <tr className="bg-surface/50">
                      <td className="border border-purple-glow/20 px-4 py-3">Social Media Widgets</td>
                      <td className="border border-purple-glow/20 px-4 py-3">Social sharing and integration features</td>
                      <td className="border border-purple-glow/20 px-4 py-3">Varies</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-glow/20 px-4 py-3">Email Marketing</td>
                      <td className="border border-purple-glow/20 px-4 py-3">Newsletter and communication tracking</td>
                      <td className="border border-purple-glow/20 px-4 py-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Managing Your Cookie Preferences</h2>
              
              <h3 className="font-display font-semibold text-xl text-white/90 mb-4">Browser Settings</h3>
              <p className="mb-4">
                You can control and manage cookies through your web browser settings. Here's how to manage cookies in popular browsers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-surface p-4 rounded border border-purple-glow/20">
                  <h4 className="font-semibold text-white mb-2">Chrome</h4>
                  <p className="text-sm">Settings &gt; Privacy and Security &gt; Cookies and other site data</p>
                </div>
                <div className="bg-surface p-4 rounded border border-purple-glow/20">
                  <h4 className="font-semibold text-white mb-2">Firefox</h4>
                  <p className="text-sm">Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</p>
                </div>
                <div className="bg-surface p-4 rounded border border-purple-glow/20">
                  <h4 className="font-semibold text-white mb-2">Safari</h4>
                  <p className="text-sm">Preferences &gt; Privacy &gt; Cookies and website data</p>
                </div>
                <div className="bg-surface p-4 rounded border border-purple-glow/20">
                  <h4 className="font-semibold text-white mb-2">Edge</h4>
                  <p className="text-sm">Settings &gt; Cookies and site permissions &gt; Cookies and site data</p>
                </div>
              </div>

              <h3 className="font-display font-semibold text-xl text-white/90 mb-4 mt-8">Opt-Out Links</h3>
              <p className="mb-4">
                You can opt out of certain third-party cookies using these industry tools:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Use the Google Analytics Opt-out Browser Add-on</li>
                <li><strong>Marketing Cookies:</strong> Visit the Network Advertising Initiative opt-out page</li>
                <li><strong>Social Media:</strong> Adjust privacy settings on respective social media platforms</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Impact of Disabling Cookies</h2>
              <p className="mb-4">
                Disabling cookies may affect your experience on our website:
              </p>
              
              <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-6">
                <h3 className="font-semibold text-amber-400 mb-3">⚠️ Important Notice</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Some website features may not function properly</li>
                  <li>Your preferences will not be saved between visits</li>
                  <li>Form submissions may not work correctly</li>
                  <li>Personalized content will not be displayed</li>
                  <li>Analytics data will not be collected for website improvements</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Cookie Consent</h2>
              <p className="mb-4">
                When you first visit our website, we will request your consent for non-essential cookies. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Accept all cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Decline non-essential cookies</li>
                <li>Change your preferences at any time</li>
              </ul>
              <p>
                Your consent is recorded and can be withdrawn at any time by contacting us or adjusting your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. 
                When we make significant changes, we will:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update the "Last modified" date at the top of this policy</li>
                <li>Notify users of material changes through website banners or email</li>
                <li>Request new consent where required by law</li>
                <li>Maintain records of consent and policy versions</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about our use of cookies or this policy:
              </p>
              
              <div className="bg-surface p-8 rounded-lg border border-purple-glow/20">
                <h4 className="font-semibold text-white mb-4 text-lg">Cookie Questions - Vensure Technologies</h4>
                <div className="space-y-3">
                  <p><strong>Email:</strong> privacy@vensuretechnologies.in</p>
                  <p><strong>General Contact:</strong> hello@vensuretechnologies.in</p>
                  <p><strong>Phone:</strong> +91 7799192932</p>
                  <p><strong>Response Time:</strong> Within 2 hours during business hours</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-purple-glow/20">
                  <p className="text-sm text-white/70">
                    We're committed to transparency about our cookie practices and will gladly help you understand 
                    or modify your cookie preferences.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-6 lg:px-16 pb-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-xl text-white mb-6 text-center">Related Policies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/privacy"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm font-semibold tracking-[0.1em] uppercase border border-purple-glow/30 text-white/70 hover:text-purple-bright hover:border-purple-glow/60 transition-all duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm font-semibold tracking-[0.1em] uppercase border border-purple-glow/30 text-white/70 hover:text-purple-bright hover:border-purple-glow/60 transition-all duration-300"
            >
              Terms & Conditions
            </a>
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
  )
}