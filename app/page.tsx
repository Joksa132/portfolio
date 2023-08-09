"use client"

import Nav from '@/components/Nav'
import { useEffect, useRef, useState } from "react";
import HomeSection from '@/components/Sections/HomeSection';
import AboutSection from '@/components/Sections/AboutSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ContactSection from '@/components/Sections/ContactSection';

export default function Home() {
  const [activeLink, setActiveLink] = useState<string>("home")
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [showNavBackground, setShowNavBackground] = useState<boolean>(false)
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
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
      { threshold: 0.6 }
    );

    const aboutSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about") {
            setIsAboutVisible(isVisible => !isVisible ? entry.isIntersecting : true);
          }
        });
      },
      { threshold: 0.6 }
    );

    const projectsSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "projects") {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRefs.about.current && !isAboutVisible) {
      aboutSectionObserver.observe(sectionRefs.about.current);
    }

    if (sectionRefs.projects.current && !isAboutVisible) {
      projectsSectionObserver.observe(sectionRefs.projects.current)
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
      <HomeSection setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
      <AboutSection isAboutVisible={isAboutVisible} sectionRefs={sectionRefs} />
      <ProjectsSection sectionRefs={sectionRefs} />
      <ContactSection setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
    </main >
  )
}
