"use client"

type Props = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
  showNavBackground: boolean;
}

export default function Nav({ activeLink, setActiveLink, sectionRefs, showNavBackground }: Props) {

  const handleLinkClick = (link: string) => {
    const sectionRef = sectionRefs[link]
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(link)
  }

  return (
    <nav
      className={`w-full py-4 flex gap-5 items-center justify-end text-xl sticky top-0 z-30 
        max-md:text-lg max-[600px]:text-sm max-[600px]:gap-2
        max-[500px]:text-xs max-[500px]:gap-0
        max-[400px]:justify-between
      ${showNavBackground ? 'shadow-lg' : ''}`}
      style={showNavBackground ? { backgroundColor: "#272727" } : {}}
    >
      <span
        className={`${activeLink === 'home' ? 'text-blue-400' : ''} cursor-pointer font-bold
        relative ease-in duration-300 z-10 px-2
        before:bg-blue-400 before:ease-in before:duration-300 before:-z-10 before:absolute
        after:bg-blue-400 after:ease-in after:duration-300 after:-z-10 after:absolute
        before:top-0 before:right-full before:bottom-0 before:left-0
        hover:before:right-0 hover:text-white`}
        onClick={() => handleLinkClick('home')}
      >
        Home
      </span>
      <span
        className={`${activeLink === 'about' ? 'text-blue-400' : ''} cursor-pointer font-bold
        relative ease-in duration-300 z-10 px-2
        before:bg-blue-400 before:ease-in before:duration-300 before:-z-10 before:absolute
        after:bg-blue-400 after:ease-in after:duration-300 after:-z-10 after:absolute
        before:top-0 before:right-full before:bottom-0 before:left-0
        hover:before:right-0 hover:text-white`}
        onClick={() => handleLinkClick('about')}
      >
        About
      </span>
      <span
        className={`${activeLink === 'projects' ? 'text-blue-400' : ''} cursor-pointer font-bold
        relative ease-in duration-300 z-10 px-2
        before:bg-blue-400 before:ease-in before:duration-300 before:-z-10 before:absolute
        after:bg-blue-400 after:ease-in after:duration-300 after:-z-10 after:absolute
        before:top-0 before:right-full before:bottom-0 before:left-0
        hover:before:right-0 hover:text-white`}
        onClick={() => handleLinkClick('projects')}
      >
        Projects
      </span>
      <span
        className={`${activeLink === 'contact' ? 'text-blue-400' : ''} cursor-pointer font-bold mr-28
        relative ease-in duration-300 z-10 px-2
        before:bg-blue-400 before:ease-in before:duration-300 before:-z-10 before:absolute
        after:bg-blue-400 after:ease-in after:duration-300 after:-z-10 after:absolute
        before:top-0 before:right-full before:bottom-0 before:left-0
        hover:before:right-0 hover:text-white`}
        onClick={() => handleLinkClick('contact')}
      >
        Contact
      </span>
    </nav>
  )
}