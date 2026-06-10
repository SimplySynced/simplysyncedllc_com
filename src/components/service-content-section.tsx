interface ServiceItem {
  title: string
  description: string
  icon: string
}

interface ServiceContentSectionProps {
  intro: string
  whyChooseUs: ServiceItem[]
  services: ServiceItem[]
  benefits: ServiceItem[]
  benefitsTitle?: string
}

export default function ServiceContentSection({
  intro,
  whyChooseUs,
  services,
  benefits,
  benefitsTitle = 'Benefits',
}: ServiceContentSectionProps) {
  return (
    <section className="bg-cream-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-navy-600/80 leading-relaxed">{intro}</p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">Why Choose Us</span>
            </span>
            <h2 className="font-playfair-display text-3xl md:text-4xl font-bold text-navy-800">
              What Sets Us <span className="text-gold-500">Apart</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="card p-6 group hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-600/10 flex items-center justify-center text-2xl group-hover:bg-gold-500/20 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-1">{item.title}</h3>
                    <p className="text-navy-600/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">Our Services</span>
            </span>
            <h2 className="font-playfair-display text-3xl md:text-4xl font-bold text-navy-800">
              What We <span className="text-gold-500">Offer</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((item, i) => (
              <div key={i} className="card p-6 group hover:shadow-card-hover transition-all duration-300 border-l-4 border-l-gold-400">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-1">{item.title}</h3>
                    <p className="text-navy-600/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-600">{benefitsTitle}</span>
            </span>
            <h2 className="font-playfair-display text-3xl md:text-4xl font-bold text-navy-800">
              The <span className="text-gold-500">Advantage</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="card p-6 text-center group hover:shadow-card-hover transition-all duration-300">
                <span className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white items-center justify-center text-2xl mb-4 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-navy-600/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
