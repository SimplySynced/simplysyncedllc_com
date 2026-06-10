export default function MissionBanner() {
  const values = [
    { icon: '🛡️', title: 'Integrity', desc: 'Honest, transparent service' },
    { icon: '⭐', title: 'Excellence', desc: 'Working for your best interest' },
    { icon: '🤝', title: 'Service', desc: 'Clients come first, always' },
    { icon: '🌱', title: 'Stewardship', desc: 'Faithful with every resource' },
  ]

  return (
    <section className="bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Content */}
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">Our Values</span>
              </div>
              
              <h2 className="h2 font-playfair-display text-navy-900 mb-6">
                Built on{' '}
                <span className="text-gold-500">Strong Values</span>
              </h2>
              
              <p className="text-lg text-navy-600/80 mb-6 leading-relaxed">
                At Simply Synced, our work is an extension of our values. Rooted in our belief of helping others, we bring a commitment to honesty, hard work, and genuine care to every project. We treat your technology like our own — because building lasting relationships matters more than a quick fix.
              </p>

              <div className="section-divider !mx-0 mb-6" />
              
              <p className="text-md text-navy-500 italic font-playfair-display">
                &ldquo;Whatever you do, work at it with all your heart.&rdquo; — Colossians 3:23
              </p>
            </div>

            {/* Right: Values Grid */}
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card p-6 text-center group hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="font-bold text-navy-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-navy-500">{value.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
