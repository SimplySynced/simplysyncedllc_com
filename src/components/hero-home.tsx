import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
          
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            {/* Professional badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">Managed IT Services</span>
              <span className="text-white/30">·</span>
              <span className="text-xs text-white/70">Lower Bucks, PA</span>
            </div>

            <h1 className="h1 font-playfair-display text-white mb-6 leading-tight">
              Technology Solutions{' '}
              <span className="text-gold-400">Built on Integrity</span>
            </h1>
            
            <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Simply Synced delivers reliable IT consulting and managed services for homes and businesses. Guided by faith and a commitment to excellence, we combine technical expertise with genuine care to keep your technology running smoothly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact-us" className="btn btn-gold group">
                Get Started Today
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/managed-services" className="btn border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                Our MSP Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                Trusted &amp; Reliable
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Responsive Support
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-1.997M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
                Values-Driven Service
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24 text-cream-50" viewBox="0 0 1440 96" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,64 C360,96 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,96 L0,96 Z" />
        </svg>
      </div>
    </section>
  )
}
