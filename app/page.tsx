"use client"
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center text-white h-screen text-6xl gap-4">
        <span className="text-left-animation">Hello, I'm <span className="text-red-500">Nikola</span>.</span>
        <span className="text-right-animation mb-6">I'm a web developer.</span>
        <button className="btn-animation rounded-sm text-3xl border-2 border-red-500 px-6 py-2 text-red-500 flex items-center gap-4">
          Check my work <AiOutlineArrowDown />
        </button>
      </section>
      <section>

      </section>
    </main>
  )
}
