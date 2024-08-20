import { previousWednesday } from "date-fns";
import Link from "next/link";

export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <Link href={"/pc-building-and-repair"}>
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 640 512">
                <title>PC Building / Repair</title>
                <rect data-element="frame" x="64" y="0" width="512" height="512" rx="512" ry="512" stroke="none" fill="#003266" />
                <g transform="translate(166.4 133.12) scale(0.48)" fill="#ffffff">
                  <path d="M384 96v224H64V96h320zM64 32C28.7 32 0 60.7 0 96v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </g>
              </svg>
              <h2 className="h4 font-playfair-display mb-2">PC Building / Repair</h2>
              <p className="text-lg text-slate-500">We can help both build and repair any home PC. No matter what it's used for we got it covered.</p>
            </div>
            </Link>

            {/* 2nd item */}
            <Link href={"/home-automation"}>
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="75 25 275 475">
                <title>Home Automation</title>
                <rect data-element="frame" x="0" y="64" width="384" height="384" rx="384" ry="384" stroke="none" fill="#003266" />
                <g transform="translate(99.84 133.12) scale(0.48)" fill="#ffffff">
                  <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h160zm-80 128c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80zm-80-336c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                </g>
              </svg>
              <h2 className="h4 font-playfair-display mb-2">Home Automation</h2>
              <p className="text-lg text-slate-500">Want the ease of telling your home to turn off your lights? Schedule the front lights to turn on at sunset? We can help get it setup!</p>
            </div>
            </Link>

            {/* 3rd item */}
            <Link href={"/home-networking"}>
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 640 512">
              <title>Home Networking</title>
              <rect data-element="frame" x="64" y="0" width="512" height="512" rx="512" ry="512" stroke="none" fill="#003266" />
              <g transform="translate(166.4 133.12) scale(0.48)" fill="#ffffff">
                <path d="M256 64h128v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h256v32h-48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-48v-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352v-32h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448v-64h128v64H96zm320-64h128v64H416v-64z" />
              </g>
            </svg>
              <h2 className="h4 font-playfair-display mb-2">Home Networking</h2>
              <p className="text-lg text-slate-500">Slow speeds over wifi? Need help installing a new router? Let us do it for you!</p>
            </div>
            </Link>

            {/* 4th item */}
            <Link href={"/pc-server-maintenance"}>
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 640 512">
                <title>PC / Server Maintenance</title>
                <rect data-element="frame" x="0" y="0" width="512" height="512" rx="512" ry="512" stroke="none" fill="#003266" />
                <g transform="translate(133.12 133.12) scale(0.48)" fill="#ffffff">
                  <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0z" />
                </g>
              </svg>
              <h2 className="h4 font-playfair-display mb-2">PC / Server Maintenance</h2>
              <p className="text-lg text-slate-500">From in house servers and PCs to remote servers. We can ensure your machines are running smooth.</p>
            </div>
            </Link>

            {/* 5th item */}
            <Link href={"/remote-management"}>
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 640 512">
                <title>Remote Management</title>
                <rect data-element="frame" x="64" y="0" width="512" height="512" rx="512" ry="512" stroke="none" fill="#003266" />
                <g transform="translate(166.4 133.12) scale(0.48)" fill="#ffffff">
                  <path d="M96 0C43 0 0 43 0 96v320c0 53 43 96 96 96h448c53 0 96-43 96-96V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zm159.8 80a48 48 0 1 0-96 0 48 48 0 1 0 96 0zM96 309.3c0 14.7 11.9 26.7 26.7 26.7h56.1c8-34.1 32.8-61.7 65.2-73.6-7.5-4.1-16.2-6.4-25.3-6.4h-69.4c-29.4 0-53.3 23.9-53.3 53.3zM461.2 336h56.1c14.7 0 26.7-11.9 26.7-26.7 0-29.5-23.9-53.3-53.3-53.3h-69.4c-9.2 0-17.8 2.3-25.3 6.4 32.4 11.9 57.2 39.5 65.2 73.6zM372 289c-3.9-.7-7.9-1-12-1h-80c-4.1 0-8.1.3-12 1-26 4.4-47.3 22.7-55.9 47-2.7 7.5-4.1 15.6-4.1 24 0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24 0-8.4-1.4-16.5-4.1-24-8.6-24.3-29.9-42.6-55.9-47zm140-113a48 48 0 1 0-96 0 48 48 0 1 0 96 0zm-192 80a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
                </g>
              </svg>
              <h2 className="h4 font-playfair-display mb-2">Remote Management</h2>
              <p className="text-lg text-slate-500">From our location we can monitor all your businesses PCs and Servers. Monitoring system health and windows updates to ensure your safe.</p>
            </div>
            </Link>

            {/* 6th item */}
            <Link href={"/web-presence"}>
            <div className="relative" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]" data-aos-delay="500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 640 512">
                <title>Web Presence</title>
                <rect data-element="frame" x="0" y="0" width="512" height="512" rx="512" ry="512" stroke="none" fill="#003266" />
                <g transform="translate(133.12 133.12) scale(0.48)" fill="#ffffff">
                  <path d="M0 256c0-46.6 12.47-90.4 34.27-128.9L144.1 318.3C166 357.5 207.9 384 256 384c14.3 0 27.1-2.3 40.8-6.6l-76.3 132.2C95.9 492.3 0 385.3 0 256zm365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6 0-38.2-16.8-72.5-43.3-96h152.7c12 29.6 18.6 62.1 18.6 96 0 141.4-114.6 255.1-256 256l109.1-190.4zM477.8 128H256c-62.9 0-113.7 44.1-125.5 102.7L54.19 98.47C101 38.53 174 0 256 0c94.8 0 177.5 51.48 221.8 128zM168 256c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88-88-39.4-88-88z" />
                </g>
              </svg>
              <h2 className="h4 font-playfair-display mb-2">Web Presence</h2>
              <p className="text-lg text-slate-500">Need a website built for your business? Let us help get your business online with a professional and clean website!</p>
            </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}