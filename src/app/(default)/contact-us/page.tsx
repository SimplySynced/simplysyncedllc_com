import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Simply Synced LLC for IT consulting, managed services, home automation, PC repair, and more. Call (215) 515-8004 or send a message. Serving the Lower Bucks area.',
  openGraph: {
    title: 'Contact Simply Synced LLC',
    description: 'Get in touch with Simply Synced LLC for IT consulting, managed services, home automation, PC repair, and more. Call (215) 515-8004. Serving the Lower Bucks area.',
    url: 'https://simplysyncedllc.com/contact-us',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Simply Synced LLC',
    description: 'Get in touch with Simply Synced LLC for IT consulting and managed services. Call (215) 515-8004. Serving the Lower Bucks area.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/contact-us',
  },
}

import Hero from '@/components/hero-contact'
import Content from './content'

export default function ContactUs() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}