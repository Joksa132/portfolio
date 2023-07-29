import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

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
    <footer className="w-full py-6 shadow-lg flex justify-center gap-10 items-center text-white" style={{ backgroundColor: "#272727" }}>
      <button className="rounded-3xl bg-blue-400 flex items-center justify-center hover:animate-bounce fixed bottom-10 right-10 z-50" onClick={() => handleButtonClick()}>
        <MdKeyboardDoubleArrowUp size={30} />
      </button>
      <Link href={"https://github.com/Joksa132"}>
        <Image src={"/github-mark-white.svg"} alt="GitHub profile" width={40} height={40} quality={100} />
      </Link>
      <Link href={"/"}>
        <span className="text-4xl cursor-pointer select-none font-bold">CV</span>
      </Link>
    </footer>
  )
}