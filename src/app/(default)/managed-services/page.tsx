import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Managed IT Services (MSP) in Lower Bucks, PA',
  description: 'Simply Synced is your Managed Service Provider in the Lower Bucks area. Proactive IT monitoring, patch management, antivirus protection, and transparent flat-rate pricing starting at $125/month.',
  openGraph: {
    title: 'Managed IT Services (MSP) — Simply Synced LLC',
    description: 'Proactive IT monitoring, patch management, antivirus protection, and expert support — flat-rate managed services by Simply Synced LLC in Lower Bucks, PA. Starting at $125/month.',
    url: 'https://simplysyncedllc.com/managed-services',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT Services (MSP) — Simply Synced LLC',
    description: 'Flat-rate managed IT services in Lower Bucks, PA. Proactive monitoring, patch management, and expert support from Simply Synced LLC.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/managed-services',
  },
}

import Hero from '@/components/hero-managed-services'
import Content from './content'

export default function ManagedServices() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
