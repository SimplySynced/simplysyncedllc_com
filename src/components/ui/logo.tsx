import Link from 'next/link'
import Image from 'next/image'
import logoWhite from '@/public/images/simply_synced_logo_whitetext.png'
import logoBlack from '@/public/images/simply_synced_logo_blacktext.png'

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  return (
    <Link href="/" className="block transition duration-150 ease-in-out" aria-label="Simply Synced LLC">
      <Image 
        src={variant === 'dark' ? logoWhite : logoBlack} 
        alt="Simply Synced LLC" 
        className="w-auto h-20 md:h-24"
        width={240} 
        height={70}
        priority 
      />
    </Link>
  )
}
