'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'} p-2 rounded-lg hover:bg-white/10 transition-colors`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24" xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png">
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full left-0 w-full z-20 bg-white shadow-card-hover border-t border-navy-100/30"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-6 py-4 max-h-[80vh] overflow-y-auto">
            <li>
              <Link href="/about" className="flex font-medium text-navy-800 hover:text-gold-600 py-3 transition-colors" onClick={() => setMobileNavOpen(false)}>About</Link>
            </li>
            
            <li className="py-2 border-t border-navy-100/30">
              <span className="flex font-semibold text-navy-600 text-xs uppercase tracking-wider py-2 mt-1">Residential</span>
              <ul className="pl-3 space-y-0.5">
                <li>
                  <Link href="/pc-building-and-repair" className="text-sm flex font-medium text-navy-600 hover:text-gold-600 py-2 transition-colors" onClick={() => setMobileNavOpen(false)}>PC Building & Repair</Link>
                </li>
                <li>
                  <Link href="/home-automation" className="text-sm flex font-medium text-navy-600 hover:text-gold-600 py-2 transition-colors" onClick={() => setMobileNavOpen(false)}>Home Automation</Link>
                </li>
                <li>
                  <Link href="/home-networking" className="text-sm flex font-medium text-navy-600 hover:text-gold-600 py-2 transition-colors" onClick={() => setMobileNavOpen(false)}>Home Networking</Link>
                </li>
              </ul>
            </li>
            
            <li className="py-2 border-t border-navy-100/30">
              <span className="flex font-semibold text-navy-600 text-xs uppercase tracking-wider py-2 mt-1">Commercial</span>
              <ul className="pl-3 space-y-0.5">
                <li>
                  <Link href="/managed-services" className="text-sm flex font-medium text-navy-600 hover:text-gold-600 py-2 transition-colors" onClick={() => setMobileNavOpen(false)}>Managed Services</Link>
                </li>
                <li>
                  <Link href="/web-presence" className="text-sm flex font-medium text-navy-600 hover:text-gold-600 py-2 transition-colors" onClick={() => setMobileNavOpen(false)}>Web Presence</Link>
                </li>
              </ul>
            </li>
            
            <li className="pt-3 border-t border-navy-100/30">
              <Link href="/contact-us" className="btn btn-gold w-full text-center" onClick={() => setMobileNavOpen(false)}>Contact Us</Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
