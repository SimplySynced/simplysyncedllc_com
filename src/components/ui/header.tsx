import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22 md:h-28">

          {/* Site branding */}
          <div className="shrink-0">
            <Logo variant="dark" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">

            <ul className="flex items-center space-x-1">
              <li>
                <Link href="/about" className="font-medium text-white/80 hover:text-white px-4 py-2 flex items-center transition duration-200 ease-in-out text-sm">About</Link>
              </li>
              <Dropdown title="Residential">
                <li>
                  <Link href="/pc-building-and-repair" className="font-medium text-sm text-navy-700 hover:text-gold-600 hover:bg-cream-100 flex py-2.5 px-4 leading-tight transition-colors duration-150">PC Building & Repair</Link>
                </li>
                <li>
                  <Link href="/home-automation" className="font-medium text-sm text-navy-700 hover:text-gold-600 hover:bg-cream-100 flex py-2.5 px-4 leading-tight transition-colors duration-150">Home Automation</Link>
                </li>
                <li>
                  <Link href="/home-networking" className="font-medium text-sm text-navy-700 hover:text-gold-600 hover:bg-cream-100 flex py-2.5 px-4 leading-tight transition-colors duration-150">Home Networking</Link>
                </li>
              </Dropdown>
              <Dropdown title="Commercial">
                <li>
                  <Link href="/managed-services" className="font-medium text-sm text-navy-700 hover:text-gold-600 hover:bg-cream-100 flex py-2.5 px-4 leading-tight transition-colors duration-150">Managed Services</Link>
                </li>
                <li>
                  <Link href="/web-presence" className="font-medium text-sm text-navy-700 hover:text-gold-600 hover:bg-cream-100 flex py-2.5 px-4 leading-tight transition-colors duration-150">Web Presence</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/contact-us" className="btn-sm bg-gold-400 text-navy-900 hover:bg-gold-500 shadow-md hover:shadow-gold ml-3 font-semibold">
                  Contact Us
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
