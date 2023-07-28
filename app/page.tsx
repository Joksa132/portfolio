"use client"
import Nav from '@/components/Nav'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";
import TechnologyCard from '@/components/TechnologyCard';
import { technologies } from '@/utils/technologies';

export default function Home() {
  const [activeLink, setActiveLink] = useState<string>("home")
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  const firstFiveTechnologies = technologies.slice(0, 5);
  const secondFiveTechnologies = technologies.slice(5, 10);

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

    const aboutSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about") {
            setIsAboutVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRefs.about.current) {
      aboutSectionObserver.observe(sectionRefs.about.current);
    }

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
        <span className="text-left-animation">Hello, I'm <span className="text-blue-400">Nikola</span>.</span>
        <span className="text-right-animation mb-6">I'm a web developer.</span>
        <Link href="#about">
          <button className="btn-animation rounded-sm text-3xl border-2 border-blue-400 px-6 py-2 text-blue-400 flex items-center gap-4">
            Check my work <AiOutlineArrowDown />
          </button>
        </Link>
      </section>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      <section className='h-screen flex flex-col items-center' id='about' ref={sectionRefs.about}>
        <div>
          <h2 className='text-6xl mt-20 border-b-8 border-blue-400'>About</h2>
        </div>
        <div className='mt-20 flex flex-col items-center w-full'>
          <p className='text-2xl w-2/5'>
            I am a Bachelor with Honours in Information Technology Engineering, commited to continuous
            learning with a constant drive to improve my skills.
          </p>
          <div className="flex w-2/4 mt-16 flex-col gap-2">
            <div className={`first-row flex gap-2 ${isAboutVisible ? 'card-left-animation' : ''}`}>
              {firstFiveTechnologies.map((technology, index) => (
                <TechnologyCard key={index} techName={technology?.name} techImg={technology?.image} />
              ))}
            </div>
            <div className={`second-row flex gap-2 ${isAboutVisible ? 'card-right-animation' : ''}`}>
              {secondFiveTechnologies.map((technology, index) => (
                <TechnologyCard key={index} techName={technology?.name} techImg={technology?.image} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='h-screen flex justify-center' id='projects' ref={sectionRefs.projects}>
        <div>
          <h2 className='text-6xl mt-20 border-b-8 border-blue-400'>Projects</h2>
        </div>
      </section>
      <section className='h-screen flex justify-center' id='contact' ref={sectionRefs.contact}>
        <div>
          <h2 className='text-6xl mt-20 border-b-8 border-blue-400'>Contact</h2>
        </div>
      </section>
    </main >
  )
}
