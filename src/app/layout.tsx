import './css/style.css'
import type { Metadata } from 'next'

import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: false
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  adjustFontFallback: false
})

const siteUrl = 'https://simplysyncedllc.com'
const siteName = 'Simply Synced LLC'
const defaultDescription = 'Simply Synced is an IT consulting and managed service provider serving the Lower Bucks area of Pennsylvania. Technology solutions built on integrity, expertise, and genuine care.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | IT Consulting & Managed Services`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    'IT consulting', 'managed services', 'MSP', 'home automation', 'home networking',
    'PC repair', 'PC building', 'remote management', 'web design', 'web development',
    'Lower Bucks', 'Bucks County', 'Pennsylvania', 'IT support', 'server maintenance',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: `${siteName} | IT Consulting & Managed Services`,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | IT Consulting & Managed Services`,
    description: defaultDescription,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Simply Synced LLC | IT Consulting & Managed Services in Lower Bucks, PA',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  url: siteUrl,
  telephone: '+12155158004',
  email: 'contact@simplysyncedllc.com',
  description: defaultDescription,
  foundingDate: '2018',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Lower Bucks County, Pennsylvania',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Networking' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PC Building & Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PC & Server Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Remote Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Presence' } },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
