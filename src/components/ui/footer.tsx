import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gold-shimmer" />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14 md:py-18">
          
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo variant="dark" />
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-5 max-w-xs">
              IT consulting and managed services for the Lower Bucks area. Technology solutions built on integrity, expertise, and genuine care.
            </p>
            
            {/* Scripture quote */}
            <div className="flex items-start gap-3 mt-2">
              <div className="w-1 min-h-[3rem] bg-gold-400/60 rounded-full shrink-0 mt-0.5" />
              <div>
                <p className="text-base text-navy-200 italic font-playfair-display leading-relaxed">
                  &ldquo;Whatever you do, work at it with all your heart.&rdquo;
                </p>
                <p className="text-xs text-gold-400/80 font-semibold mt-1 tracking-wide uppercase">
                  Colossians 3:23
                </p>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Residential links */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Residential</h6>
            <ul className="space-y-3">
              <li><Link href="/pc-building-and-repair" className="text-sm text-navy-300 hover:text-white transition-colors duration-200">PC Building & Repair</Link></li>
              <li><Link href="/home-automation" className="text-sm text-navy-300 hover:text-white transition-colors duration-200">Home Automation</Link></li>
              <li><Link href="/home-networking" className="text-sm text-navy-300 hover:text-white transition-colors duration-200">Home Networking</Link></li>
            </ul>
          </div>

          {/* Commercial links */}
          <div className="lg:col-span-2">
            <h6 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Commercial</h6>
            <ul className="space-y-3">
              <li><Link href="/managed-services" className="text-sm text-navy-300 hover:text-white transition-colors duration-200">Managed Services</Link></li>
              <li><Link href="/web-presence" className="text-sm text-navy-300 hover:text-white transition-colors duration-200">Web Presence</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">Contact</h6>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <a href="tel:+12155158004" className="text-sm text-navy-300 hover:text-white transition-colors">(215) 515-8004</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <a href="mailto:contact@simplysyncedllc.com" className="text-sm text-navy-300 hover:text-white transition-colors break-all">contact@simplysyncedllc.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span className="text-sm text-navy-300">Lower Bucks Area</span>
              </li>
            </ul>
            
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-400/20 border border-white/10 flex items-center justify-center text-navy-300 hover:text-gold-400 transition-all duration-200" href="https://twitter.com/simplysyncedllc" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0019.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z" /></svg>
              </a>
              <a className="w-9 h-9 rounded-lg bg-white/5 hover:bg-gold-400/20 border border-white/10 flex items-center justify-center text-navy-300 hover:text-gold-400 transition-all duration-200" href="https://facebook.com/simplysyncedllc" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 013.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-white/10 gap-4">
          <div className="text-xs text-navy-400">
            © {new Date().getFullYear()} Simply Synced LLC. All rights reserved.
          </div>
          <div className="text-xs text-navy-400">
            Technology Solutions · Integrity &amp; Excellence
          </div>
        </div>

      </div>
    </footer>
  )
}
