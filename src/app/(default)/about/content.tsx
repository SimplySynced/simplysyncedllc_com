export default function AboutContent() {  
  return (
    <section className="bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-3" data-aos="fade-right">
              <h2 className="h3 font-playfair-display text-navy-900 mb-6">Our Story</h2>
              <div className="section-divider !mx-0 mb-8" />
              
              <div className="prose prose-lg text-navy-600/80 max-w-none space-y-6">
                <p>
                  Simply Synced LLC was founded in 2018 with a clear calling: to provide quality, affordable IT consulting services to residential and commercial clients in the Lower Bucks area. Guided by our devotion to provide excellence, we believe that simplicity, integrity, and genuine care are at the heart of great service — and we carry those values into every project we take on.
                </p>
              </div>

              <h3 className="text-xl font-bold font-playfair-display text-navy-900 mt-12 mb-4">Our Mission</h3>
              <p className="text-navy-600/80 leading-relaxed mb-8">
                We strive to be good stewards of the talents and trust our clients place in us. We treat every client like a neighbor, every project as an act of service, and every challenge as an opportunity to deliver excellence. Serving the Lower Bucks area, we&apos;re dedicated to being a blessing through technology.
              </p>

              <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-4">Why Simply Synced?</h3>
              <p className="text-navy-600/80 leading-relaxed">
                Consider Simply Synced LLC to be your technical swiss army knife. With skills across many different areas — from managed services to home automation — we will find the right solution for you. We take great pride in our work and never back down from a challenge.
              </p>
            </div>

            {/* Sidebar with values */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <div className="card p-8 sticky top-28">
                <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-6">Our Values</h3>
                
                <div className="space-y-5">
                  {[
                    { icon: '🛡️', title: 'Integrity', desc: 'Honest, transparent service in every interaction' },
                    { icon: '⭐', title: 'Excellence', desc: 'Working wholeheartedly, as you deserve' },
                    { icon: '🤝', title: 'Service', desc: 'Treating every client with respect and care' },
                    { icon: '🌱', title: 'Stewardship', desc: 'Responsible, faithful technology solutions' },
                  ].map((value) => (
                    <div key={value.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-cream-100 transition-colors duration-200">
                      <span className="text-2xl">{value.icon}</span>
                      <div>
                        <h4 className="font-bold text-navy-900 text-sm">{value.title}</h4>
                        <p className="text-sm text-navy-500 mt-0.5">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-navy-100">
                  <div className="flex items-start gap-2.5">
                    <div className="w-0.5 min-h-[2.5rem] bg-gold-400 rounded-full shrink-0 mt-1" />
                    <p className="text-sm text-navy-500 italic font-playfair-display leading-relaxed">
                      &ldquo;And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus.&rdquo; — Colossians 3:17
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
