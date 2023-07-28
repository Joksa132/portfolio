"use client"
import Nav from '@/components/Nav'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";
import TechnologyCard from '@/components/TechnologyCard';
import { technologies } from '@/utils/technologies';
import emailjs from '@emailjs/browser';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeLink, setActiveLink] = useState<string>("home")
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };
  const formRef = useRef<HTMLFormElement>(null);
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
          if (entry.target.id === "about" && !isAboutVisible) {
            setIsAboutVisible(entry.isIntersecting);
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

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || "", process.env.NEXT_PUBLIC_TEMPLATE_ID || "", formRef.current || "", process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        enqueueSnackbar('Message successfully sent', { variant: 'success' })
        console.log(result)
      }, (error) => {
        enqueueSnackbar('Message failed to send', { variant: 'error' })
        console.log(error)
      });
  }

  const handleHeroButtonClick = () => {
    const sectionRef = sectionRefs.projects;
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink("projects")
  }

  return (
    <main className='text-white scroll-smooth'>
      <section className="flex flex-col items-center justify-center h-screen text-6xl gap-4" id='home' ref={sectionRefs.home}>
        <span className="text-left-animation">Hello, I'm <span className="text-blue-400">Nikola</span>.</span>
        <span className="text-right-animation mb-6">I'm a web developer.</span>
        <button
          className="btn-animation rounded-sm text-3xl border-2 border-blue-400 px-6 py-2 text-blue-400 flex items-center gap-4"
          onClick={handleHeroButtonClick}
        >
          Check my work <AiOutlineArrowDown />
        </button>
      </section>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} sectionRefs={sectionRefs} />
      <section className='h-screen flex flex-col items-center' id='about' ref={sectionRefs.about}>
        <div>
          <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold'>About</h2>
        </div>
        <div className='mt-20 flex flex-col items-center w-full'>
          <p className='text-2xl w-2/4'>
            I am a Bachelor with Honours in Information Technology Engineering, commited to continuous
            learning with a constant drive to improve my skills in Web Development.
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
          <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold'>Projects</h2>
        </div>
      </section>
      <section className='h-screen flex flex-col justify-between' id='contact' ref={sectionRefs.contact}>
        <div className='flex flex-col items-center'>
          <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold'>Contact</h2>
          <form ref={formRef} onSubmit={handleEmailSubmit} className='flex flex-col items-center gap-2 mt-20 w-full'>
            <input
              type="text"
              name='user_name'
              id='user_name'
              placeholder='Name'
              required
              className='bg-zinc-800 p-2 w-1/4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
            />
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder='Email'
              required
              className='bg-zinc-800 p-2 w-1/4 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400'
            />
            <textarea
              name='message'
              id='message'
              placeholder='Message'
              required
              className='bg-zinc-800 p-2 w-1/4 rounded-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-400'
              rows={6}
            />
            <div className='flex justify-end w-1/4 text-xl font-bold mt-2'>
              <button
                type='submit'
                className='tracking-widest border-b-2 border-blue-400 px-2 hover:border-2 hover:bg-blue-400 hover:text-2xl hover:rounded-sm'
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        {/*<Footer />*/}
      </section>
      <SnackbarProvider />
    </main >
  )
}
