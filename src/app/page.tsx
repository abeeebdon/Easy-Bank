'use client'

import Link from 'next/link'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import { useState } from 'react'
import Footer from '@/components/Footer'

export default function Home() {
  const [showNav, setShowNav] = useState<boolean>(false)

  return (
    <main className="relative bg-very-light-gray">
      <Header setShowNav={setShowNav} showNav={showNav} />
      {showNav && (
        <article className="fixed inset-0 top-[10%] h-fit p-4 md:hidden ">
          <div className="flex flex-col gap-4 bg-white p-6 text-black rounded-lg text-center w-full ">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Careers</Link>
          </div>
        </article>
      )}
      <Section1 />
      {/* <Footer /> */}
    </main>
  )
}
