import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Consulting & Managed Services in Lower Bucks, PA',
  description: 'Simply Synced is your IT consulting and managed service provider in the Lower Bucks area of Pennsylvania. Technology solutions delivered with integrity, faith, and excellence — from managed services to home automation.',
  openGraph: {
    title: 'Simply Synced LLC | IT Consulting & Managed Services in Lower Bucks, PA',
    description: 'Simply Synced is your IT consulting and managed service provider in the Lower Bucks area of Pennsylvania. Technology solutions delivered with integrity, faith, and excellence.',
    url: 'https://simplysyncedllc.com',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simply Synced LLC | IT Consulting & Managed Services',
    description: 'Simply Synced is your IT consulting and managed service provider in the Lower Bucks area of Pennsylvania. Technology solutions delivered with integrity, faith, and excellence.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com',
  },
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import MissionBanner from '@/components/mission-banner'

export default function Home() {
  return (
    <>
      <Hero />
      <MissionBanner />
      <FeaturesBlocks />
    </>
  )
}
