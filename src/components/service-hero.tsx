interface ServiceHeroProps {
  title: string
  subtitle?: string
}

export default function ServiceHero({ title, subtitle }: ServiceHeroProps) {  
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="h1 font-playfair-display text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-navy-200 leading-relaxed">{subtitle}</p>
            )}
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
