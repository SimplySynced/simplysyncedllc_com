import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/simply_synced_logo_whitetext.png'

export default function Logo() {
  return (
    <Link href="/" className="block text-blue-600 transition duration-150 ease-in-out pt-4" aria-label="Cruip">
      <Image src={logo} alt={'Simply Synced LLC'} className="w-full h-auto" width={300} height={200} />
    </Link>
  )
}
