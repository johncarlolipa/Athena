import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${montserrat.className}`}>
      Heloo
    </div>
  )
}
