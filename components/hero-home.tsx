export default function HeroHome() {
  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-playfair-display text-slate-100 mb-4">Welcome to Simply Synced!</h1>
              <p className="text-xl text-slate-400 mb-8">Consider Simply Synced LLC to be your technical swiss army knife. With skills in many different areas, we will be able to come up a solution for you! We take great pride in our work and never back down from a set of challenges</p>
            </div> 

          </div>

        </div>
      </div>
    </section>
  )
}