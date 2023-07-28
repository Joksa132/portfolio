import Image from "next/image";
import { BiSolidChevronsUp } from 'react-icons/bi'

type Props = {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> }
}

export default function Footer({ setActiveLink, sectionRefs }: Props) {

  const handleButtonClick = () => {
    const sectionRef = sectionRefs.home;
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink("home")
  }

  return (
    <footer className="w-full py-8 shadow-lg flex justify-center gap-4 items-center text-white relative">
      <button className="absolute rounded-sm bg-blue-400 flex items-center justify-center -top-5 hover:animate-bounce" onClick={() => handleButtonClick()}>
        <BiSolidChevronsUp size={40} />
      </button>
      <Image src={"/github-mark-white.svg"} alt="GitHub profile" width={40} height={40} quality={100} />
      <Image src={"/resume-icon.svg"} alt="Resume Link" width={50} height={50} quality={100} />
    </footer>
  )
}