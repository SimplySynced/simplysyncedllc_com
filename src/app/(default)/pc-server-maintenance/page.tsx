import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PC & Server Maintenance for Businesses in Lower Bucks, PA',
  description: 'Simply Synced provides proactive PC and server maintenance for businesses in Lower Bucks, PA. Hardware upkeep, software updates, virus protection, and data backup to keep your business running.',
  openGraph: {
    title: 'Business PC & Server Maintenance — Simply Synced LLC',
    description: 'Proactive PC and server maintenance for businesses by Simply Synced LLC in Lower Bucks, PA. Hardware upkeep, software updates, virus protection, and data backup.',
    url: 'https://simplysyncedllc.com/pc-server-maintenance',
  },
  twitter: {
    title: 'Business PC & Server Maintenance — Simply Synced LLC',
    description: 'Proactive PC and server maintenance in Lower Bucks, PA. Hardware upkeep, updates, virus protection, and backup from Simply Synced LLC.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/pc-server-maintenance',
  },
}

import Hero from '@/components/hero-pc-server-maintenance'
import Content from './content'

export default function PCServerMaintenance() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
