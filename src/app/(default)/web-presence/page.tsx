import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & Development Services in Lower Bucks, PA',
  description: "Simply Synced builds custom, SEO-ready websites for small businesses, churches, and organizations in Lower Bucks, PA. Responsive design, CMS integration, and a customer-first approach.",
  openGraph: {
    title: 'Web Design & Development — Simply Synced LLC',
    description: "Custom, SEO-ready websites for businesses, churches, and organizations by Simply Synced LLC in Lower Bucks, PA. Responsive design, CMS integration, and a customer-first approach.",
    url: 'https://simplysyncedllc.com/web-presence',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development — Simply Synced LLC',
    description: 'Custom, responsive websites for businesses and organizations in Lower Bucks, PA. Built by Simply Synced LLC with SEO and CMS in mind.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/web-presence',
  },
}

import Hero from '@/components/hero-web-presence'
import Content from './content'

export default function WebPresence() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
