import Link from "next/link";

const residentialServices = [
  {
    href: "/pc-building-and-repair",
    title: "PC Building & Repair",
    desc: "Custom builds and expert repairs for any home PC. No matter the use case, we've got you covered.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    href: "/home-automation",
    title: "Home Automation",
    desc: "Control your home with a touch or voice command. Lights, locks, thermostats — we'll set it all up.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    href: "/home-networking",
    title: "Home Networking",
    desc: "Slow Wi-Fi or need a new router? We deliver seamless connectivity for every device in your home.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
];

const commercialServices = [
  {
    href: "/managed-services",
    title: "Managed Services",
    desc: "Keep your business machines running smoothly with proactive maintenance and expert support.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    href: "/web-presence",
    title: "Web Presence",
    desc: "Professional websites for businesses, churches, and organizations. Get online with a polished, modern web presence.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

type Service = { href: string; title: string; desc: string; icon: React.ReactNode };

function ServiceGrid({ services, startIndex = 0 }: { services: Service[]; startIndex?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-aos-id-blocks>
      {services.map((service, index) => (
        <Link href={service.href} key={service.title} className="group">
          <div
            className="card p-8 h-full flex flex-col hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            data-aos-delay={(startIndex + index) * 80}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-600 text-white mb-5 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold font-playfair-display text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-navy-600/70 leading-relaxed flex-grow">
              {service.desc}
            </p>
            <div className="flex items-center text-navy-600 font-semibold text-sm mt-5 group-hover:text-gold-600 transition-colors duration-300">
              Learn More
              <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function FeaturesBlocks() {
  return (
    <section className="bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-navy-600/5 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="h2 font-playfair-display text-navy-900 mb-4">
              How We <span className="text-gold-500">Serve</span> You
            </h2>
            <p className="text-lg text-navy-600/70">
              From home automation to enterprise server management, we offer a full range of IT services — delivered with care, expertise, and a values-driven commitment to your success.
            </p>
          </div>

          {/* Residential Services */}
          <div className="mb-12" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-lg font-semibold font-playfair-display text-navy-700 whitespace-nowrap">Residential</h3>
              <div className="h-px bg-navy-200 flex-grow" />
            </div>
            <ServiceGrid services={residentialServices} startIndex={0} />
          </div>

          {/* Commercial Services */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-lg font-semibold font-playfair-display text-navy-700 whitespace-nowrap">Commercial</h3>
              <div className="h-px bg-navy-200 flex-grow" />
            </div>
            <ServiceGrid services={commercialServices} startIndex={residentialServices.length} />
          </div>

        </div>
      </div>
    </section>
  )
}
