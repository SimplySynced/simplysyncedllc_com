export default function HeroAbout() {  
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-white/10">
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="h1 font-playfair-display text-white mb-6">
              Technology with{' '}
              <span className="text-gold-400">Purpose &amp; Integrity</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              A values-driven IT company bringing expertise, honesty, and genuine care to every solution we deliver. Guided by our faith, we serve our community with integrity.
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
