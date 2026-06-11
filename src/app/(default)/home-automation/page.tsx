import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Automation Services in Lower Bucks, PA',
  description: 'Transform your home with Simply Synced\'s home automation services in Lower Bucks, PA. Smart lighting, climate control, security, and voice control — tailored to your lifestyle.',
  openGraph: {
    title: 'Home Automation Services — Simply Synced LLC',
    description: 'Transform your home with Simply Synced\'s home automation services in Lower Bucks, PA. Smart lighting, climate control, security, and voice control — tailored to your lifestyle.',
    url: 'https://simplysyncedllc.com/home-automation',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Automation Services — Simply Synced LLC',
    description: 'Smart lighting, climate control, security cameras, and voice control — customized home automation by Simply Synced LLC in Lower Bucks, PA.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/home-automation',
  },
}

import Hero from '@/components/hero-home-automation'
import Content from './content'

export default function HomeAutomation() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
