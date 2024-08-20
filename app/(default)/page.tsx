export const metadata = {
  title: 'Home - Simply Synced LLC, simplifying your world!',
  description: 'Simply Synced is your IT consulting partner for tailored solutions and business success. Empowering your tech journey.',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
    </>
  )
}
