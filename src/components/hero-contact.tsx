export default function HeroContact() {  
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/10">
              <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="h1 font-playfair-display text-white mb-6">
              Let&apos;s{' '}
              <span className="text-gold-400">Get in Touch</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              Whether you need IT support, a managed services quote, or have a question — we&apos;re here to help. Reach out and let&apos;s find the right solution for you.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 md:h-20 text-cream-50" viewBox="0 0 1440 80" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,48 C480,80 960,16 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
