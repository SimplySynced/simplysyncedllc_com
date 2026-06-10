import Link from 'next/link'

const corePlanFeatures = [
  'Remote monitoring & alerts',
  'Patch management & updates',
  'Email & phone support',
  'Monthly health reports',
  'Antivirus & malware protection',
]

const addons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'Data Backup',
    description: 'Automated, encrypted backups of your critical business data with easy recovery options — so you\'re protected when the unexpected happens.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Advanced Antivirus & Threat Detection',
    description: 'Upgrade to enterprise-grade endpoint protection with real-time threat detection, behavioral analysis, and active response to keep your systems secure.',
  },
]

const mspBenefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Predictable Costs',
    description: 'Fixed monthly pricing means no surprise IT bills. Budget confidently with transparent, all-inclusive service plans.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Reduced Downtime',
    description: 'Proactive monitoring catches issues before they become problems. Keep your team productive and your systems running.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Enhanced Security',
    description: 'Enterprise-grade security tools, regular audits, and real-time threat detection to protect your business data.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Scalable Growth',
    description: 'Your IT infrastructure grows with you. We plan ahead so your technology supports your business goals.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-1.997M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Expert Team',
    description: 'Get an entire IT department without the overhead. Our experienced technicians are an extension of your team.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fast Response',
    description: 'When issues arise, we respond quickly. Priority support ensures your business never waits long for a resolution.',
  },
]

export default function ManagedServicesContent() {
  return (
    <section className="bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">Why MSP?</span>
            </div>
            <h2 className="h2 font-playfair-display text-navy-900 mb-6">
              Your IT, <span className="text-gold-500">Fully Managed</span>
            </h2>
            <p className="text-lg text-navy-600/80 leading-relaxed">
              Stop worrying about technology and start focusing on your business. As your Managed Service Provider, Simply Synced handles everything from day-to-day IT operations to long-term technology strategy — proactively, reliably, and affordably.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mspBenefits.map((benefit) => (
              <div key={benefit.title} className="card p-8 group hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-600 text-white mb-5 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-navy-600/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Plan + Add-ons */}
        <div className="pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">Pricing</span>
            </div>
            <h2 className="h2 font-playfair-display text-navy-900 mb-4">
              Simple, <span className="text-gold-500">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-navy-600/70">
              One straightforward plan with optional add-ons — no tiers, no confusion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Core Plan card */}
            <div className="card p-8 md:p-10 ring-2 ring-gold-400 shadow-card-hover relative">
              <div className="absolute -top-3 left-8">
                <span className="bg-gold-400 text-navy-900 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Core Plan
                </span>
              </div>

              <div className="flex items-end gap-2 mt-2 mb-2">
                <span className="text-4xl font-bold font-playfair-display text-navy-900">$125</span>
                <span className="text-navy-500 mb-1">/ month</span>
              </div>
              <p className="text-sm text-navy-500 mb-6">Per device pricing available — contact us for a quote.</p>

              <div className="section-divider !mx-0 mb-6" />

              <ul className="space-y-3 mb-8">
                {corePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-navy-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact-us" className="btn btn-gold w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Add-ons */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-1">Optional Add-ons</h3>
                <p className="text-sm text-navy-500">Enhance your core plan with additional protection and peace of mind.</p>
              </div>

              <div className="space-y-4">
                {addons.map((addon) => (
                  <div key={addon.title} className="card p-6 flex items-start gap-5 group hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-600 text-white shrink-0 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors duration-300">
                      {addon.icon}
                    </div>
                    <div>
                      <h4 className="font-bold font-playfair-display text-navy-900 mb-1">{addon.title}</h4>
                      <p className="text-sm text-navy-600/70 leading-relaxed">{addon.description}</p>
                    </div>
                  </div>
                ))}

                <p className="text-xs text-navy-400 pl-1">Add-on pricing provided during consultation based on your environment.</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="pb-16 md:pb-24">
          <div className="card bg-gradient-to-br from-navy-800 to-navy-900 p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair-display text-white mb-4">
              Ready to Simplify Your IT?
            </h2>
            <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our managed services can reduce your costs, improve your security, and free you to focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact-us" className="btn btn-gold group">
                Schedule a Consultation
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="tel:+12155158004" className="btn border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                Call (215) 515-8004
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}