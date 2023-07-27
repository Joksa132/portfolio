"use client"
import Nav from '@/components/Nav'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Home() {
  return (
    <main className='text-white scroll-smooth'>
      <section className="flex flex-col items-center justify-center h-screen text-6xl gap-4" id='home'>
        <span className="text-left-animation">Hello, I'm <span className="text-red-500">Nikola</span>.</span>
        <span className="text-right-animation mb-6">I'm a web developer.</span>
        <Link href="#about">
          <button className="btn-animation rounded-sm text-3xl border-2 border-red-500 px-6 py-2 text-red-500 flex items-center gap-4">
            Check my work <AiOutlineArrowDown />
          </button>
        </Link>
      </section>
      <Nav />
      <section className='h-screen' id='about'>
      </section>
      <section className='h-screen' id='projects'>
      </section>
    </main>
  )
}
