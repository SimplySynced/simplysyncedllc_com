import './css/style.css'

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

export const metadata = {
  title: 'Simply Synced LLC, simplifying your world!', 
  description: 'Simply Synced is your IT consulting partner for tailored solutions and business success. Empowering your tech journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
