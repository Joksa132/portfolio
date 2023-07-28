"use client"

type Props = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> }
}

export default function Nav({ activeLink, setActiveLink, sectionRefs }: Props) {

  const handleLinkClick = (link: string) => {
    const sectionRef = sectionRefs[link]
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(link)
  }

  return (
    <nav className="w-full py-4 shadow-lg flex gap-10 items-center justify-end text-xl sticky top-0 z-50">
      <span className={`${activeLink === 'home' ? 'text-blue-400' : ''} cursor-pointer font-bold`} onClick={() => handleLinkClick('home')}>
        Home
      </span>
      <span className={`${activeLink === 'about' ? 'text-blue-400' : ''} cursor-pointer font-bold`} onClick={() => handleLinkClick('about')}>
        About
      </span>
      <span className={`${activeLink === 'projects' ? 'text-blue-400' : ''} cursor-pointer font-bold`} onClick={() => handleLinkClick('projects')}>
        Projects
      </span>
      <span className={`${activeLink === 'contact' ? 'text-blue-400' : ''} cursor-pointer font-bold mr-28`} onClick={() => handleLinkClick('contact')}>
        Contact
      </span>
    </nav>
  )
}