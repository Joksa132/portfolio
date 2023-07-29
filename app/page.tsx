"use client"
import Nav from '@/components/Nav'
import { useEffect, useRef, useState } from "react";

import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [activeLink, setActiveLink] = useState<string>("home")
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [showNavBackground, setShowNavBackground] = useState<boolean>(false)
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
            setShowNavBackground(entry.target.id !== 'home');
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about") {
            setIsAboutVisible(isVisible => !isVisible ? entry.isIntersecting : true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRefs.about.current && !isAboutVisible) {
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
  }, [sectionRefs, isAboutVisible]);



  return (
    <main className='text-white scroll-smooth'>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} sectionRefs={sectionRefs} showNavBackground={showNavBackground} />
      <HomeSection activeLink={activeLink} setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
      <AboutSection isAboutVisible={isAboutVisible} sectionRefs={sectionRefs} />
      <ProjectsSection sectionRefs={sectionRefs} />
      <ContactSection setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
    </main >
  )
}
