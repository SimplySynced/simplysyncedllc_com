import Image from 'next/image'
import CEOImage from '@/public/images/team-member-01.jpg'

export default function TeamMembers() {  
  return (
    <section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Meet the CEO!</h2>
          </div>

          {/* Team members */}
          <div className="relative max-w-sm mx-auto grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 items-start sm:max-w-xl lg:max-w-none" data-aos-id-team>

            {/* 1st member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="inline-flex mb-4">
                <Image className="rounded-full" src={CEOImage} width={120} height={120} alt="Rob Burgess" />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Rob Burgess</h4>
              <div className="font-medium text-blue-600">CEO &amp; Founder</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}