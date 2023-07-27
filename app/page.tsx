"use client"
import Nav from '@/components/Nav'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeLink, setActiveLink] = useState<string>("home")
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((sectionRef) => {
      if (sectionRef.current) {
        sectionObserver.observe(sectionRef.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((sectionRef) => {
        if (sectionRef.current) {
          sectionObserver.unobserve(sectionRef.current);
        }
      });
    };
  }, [sectionRefs]);

  return (
    <main className='text-white scroll-smooth'>
      <section className="flex flex-col items-center justify-center h-screen text-6xl gap-4" id='home' ref={sectionRefs.home}>
        <span className="text-left-animation">Hello, I'm <span className="text-red-500">Nikola</span>.</span>
        <span className="text-right-animation mb-6">I'm a web developer.</span>
        <Link href="#about">
          <button className="btn-animation rounded-sm text-3xl border-2 border-red-500 px-6 py-2 text-red-500 flex items-center gap-4">
            Check my work <AiOutlineArrowDown />
          </button>
        </Link>
      </section>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      <section className='h-screen' id='about' ref={sectionRefs.about}>
      </section>
      <section className='h-screen' id='projects' ref={sectionRefs.projects}>
      </section>
      <section className='h-screen' id='contact' ref={sectionRefs.contact}>
      </section>
    </main>
  )
}
