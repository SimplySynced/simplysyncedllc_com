import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom PC Building & Repair in Lower Bucks, PA',
  description: 'Simply Synced offers custom PC building, hardware upgrades, repairs, virus removal, and routine maintenance in Lower Bucks, PA. Fast, reliable service with top-quality components.',
  openGraph: {
    title: 'Custom PC Building & Repair — Simply Synced LLC',
    description: 'Custom PC building, hardware upgrades, virus removal, and routine maintenance by Simply Synced LLC in Lower Bucks, PA. Expert care for your computer.',
    url: 'https://simplysyncedllc.com/pc-building-and-repair',
  },
  twitter: {
    title: 'Custom PC Building & Repair — Simply Synced LLC',
    description: 'Custom PC building, repairs, virus removal, and maintenance in Lower Bucks, PA. Expert service from Simply Synced LLC.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/pc-building-and-repair',
  },
}

import Hero from '@/components/hero-pc-building-and-repair'
import Content from './content'

export default function PCBuildingAndRepair() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
