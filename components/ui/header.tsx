import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Residential">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/pc-building-and-repair" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">PC Building & Repair</Link>
                </li>
                <li>
                  <Link href="/home-automation" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Home Automation</Link>
                </li>
                <li>
                  <Link href="/home-networking" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Home Networking</Link>
                </li>
              </Dropdown>
              {/* 1st level: hover */}
              <Dropdown title="Commercial">
                {/* 2nd level: hover */}
                <li>
                  <Link href="/pc-server-maintenance" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">PC & Server Maintenance</Link>
                </li>
                <li>
                  <Link href="/remote-management" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Remote Management</Link>
                </li>
                <li>
                  <Link href="/web-presence" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Web Presence</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/contact-us" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Contact Us</Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
