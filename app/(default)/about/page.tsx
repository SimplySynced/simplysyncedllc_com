export const metadata = {
  title: 'About Us - Simply Synced',
  description: 'About Us page',
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
