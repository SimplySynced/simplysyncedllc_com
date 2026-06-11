import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Networking Services in Lower Bucks, PA',
  description: 'Simply Synced provides professional home networking installation, Wi-Fi optimization, and network security in Lower Bucks, PA. Fast, reliable, and secure networks for your whole home.',
  openGraph: {
    title: 'Home Networking Services — Simply Synced LLC',
    description: 'Professional home networking installation, Wi-Fi optimization, and network security by Simply Synced LLC in Lower Bucks, PA. Reliable connectivity for every room.',
    url: 'https://simplysyncedllc.com/home-networking',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Networking Services — Simply Synced LLC',
    description: 'Home network installation, Wi-Fi optimization, and network security by Simply Synced LLC in Lower Bucks, PA.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/home-networking',
  },
}

import Hero from '@/components/hero-home-networking'
import Content from './content'

export default function HomeNetworking() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
