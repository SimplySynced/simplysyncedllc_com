import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remote IT Management Services in Lower Bucks, PA',
  description: "Simply Synced's remote management services keep your IT infrastructure monitored, secure, and optimized from anywhere. Real-time threat detection, remote software deployment, and performance tuning.",
  openGraph: {
    title: 'Remote IT Management Services — Simply Synced LLC',
    description: "Simply Synced's remote management keeps your IT infrastructure monitored, secure, and optimized. Real-time threat detection, remote software deployment, and performance tuning in Lower Bucks, PA.",
    url: 'https://simplysyncedllc.com/remote-management',
  },
  twitter: {
    title: 'Remote IT Management Services — Simply Synced LLC',
    description: 'Remote IT monitoring, security, and management by Simply Synced LLC in Lower Bucks, PA. Keep your systems running from anywhere.',
  },
  alternates: {
    canonical: 'https://simplysyncedllc.com/remote-management',
  },
}

import Hero from '@/components/hero-remote-management'
import Content from './content'

export default function RemoteManagement() {
  return (
    <>
      <Hero />
      <Content />
    </>
  )
}
