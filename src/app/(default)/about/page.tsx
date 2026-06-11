import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Our Story & Values',
  description: 'Learn about Simply Synced LLC — an IT consulting company built on faith, integrity, and excellence. Founded in 2018, proudly serving residential and commercial clients in the Lower Bucks area of Pennsylvania.',
  openGraph: {
    title: 'About Simply Synced LLC — Our Story & Values',
    description: 'Learn about Simply Synced LLC — an IT consulting company built on faith, integrity, and excellence. Founded in 2018, proudly serving the Lower Bucks area of Pennsylvania.',
    url: 'https://simplysyncedllc.com/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Simply Synced LLC — Our Story & Values',
    description: 'Learn about Simply Synced LLC — an IT consulting company built on faith, integrity, and excellence. Serving Lower Bucks since 2018.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/about',
  },
}

import Hero from '@/components/hero-about'
import Content from './content'

export default function About() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
