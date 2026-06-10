'use client'

import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-cream-50">
      <Header />
      
      <main className="grow">
        {children}
      </main>

      <Footer />
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '12px',
            background: '#1E293B',
            color: '#FDFCFA',
          },
        }}
      />
    </div>
  )
}
