'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

type DropdownProps = {
  children: React.ReactNode
  title: string
}

export default function Dropdown({
  children,
  title
}: DropdownProps) {

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className="font-medium text-white/80 hover:text-white px-4 py-2 flex items-center transition duration-200 ease-in-out text-sm"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg className={`w-3 h-3 fill-current text-white/50 ml-1.5 shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" xmlns="https://i.ytimg.com/vi/wBzDIR2DkPE/sddefault.jpg">
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        as="ul"
        className="origin-top-right absolute top-full left-0 w-52 bg-white py-2 rounded-xl shadow-card-hover border border-navy-100/50 mt-1"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
    </li>
  )
}
