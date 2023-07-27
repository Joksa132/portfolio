"use client"
import Link from "next/link";

type Props = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export default function Nav({ activeLink, setActiveLink }: Props) {

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
  }

  return (
    <nav className="w-full py-4 shadow-lg flex gap-10 items-center justify-end text-xl sticky top-0">
      <Link href="#home">
        <span className={activeLink === "home" ? 'text-red-500' : ''} onClick={() => handleLinkClick('home')}>
          Home
        </span>
      </Link>
      <Link href="#about">
        <span className={activeLink === "about" ? 'text-red-500' : ''} onClick={() => handleLinkClick('about')}>
          About
        </span>
      </Link>
      <Link href="#projects">
        <span className={activeLink === "projects" ? 'text-red-500' : ''} onClick={() => handleLinkClick('projects')}>
          Projects
        </span>
      </Link>
      <Link href="#contact">
        <span className={`${activeLink === 'contact' ? 'text-red-500' : ''} mr-28`} onClick={() => handleLinkClick('contact')}>
          Contact
        </span>
      </Link>
    </nav>
  )
}