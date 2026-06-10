import Link from 'next/link'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-cream-50">

      <Header />

      <main className="grow">
        {/* Hero-style top */}
        <div className="relative bg-hero-pattern pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-cream-100">Page Not Found</span>
              </span>
              <h1 className="font-playfair-display text-5xl md:text-6xl font-bold text-white mb-4">
                4<span className="text-gold-400">0</span>4
              </h1>
              <p className="text-xl text-cream-200/80 mb-8">We couldn&apos;t find the page you&apos;re looking for.</p>
              <Link className="btn-primary" href="/">
                Back Home
              </Link>
            </div>
          </div>
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#FDFCFA"/>
            </svg>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
