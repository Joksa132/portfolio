"use client";
import { AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
};

export default function HomeSection({ setActiveLink, sectionRefs }: Props) {
  const handleHeroButtonClick = () => {
    const sectionRef = sectionRefs.projects;
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink("projects");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-6xl gap-4 max-[900px]:text-4xl max-sm:text-4xl max-[500px]:text-3xl max-[390px]:text-2xl"
      id="home"
      ref={sectionRefs.home}
    >
      <span className="text-left-animation">
        Hello, I'm <span className="text-blue-400 font-bold">Nikola</span>.
      </span>
      <span className="text-right-animation mb-6 max-[400px]:mb-2">
        I'm a web developer.
      </span>
      <button
        className="btn-animation rounded-sm text-3xl border-2 border-blue-400 px-6 py-2 text-blue-400 flex items-center gap-4 relative ease-in duration-500 z-1 font-bold before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:top-0 before:bottom-0 after:top-0 after:bottom-0
          before:right-full before:left-0 after:right-0 after:left-full hover:before:right-1/2 hover:after:left-1/2 hover:text-white max-[900px]:text-2xl max-[500px]:text-xl max-[400px]:text-sm"
        onClick={handleHeroButtonClick}
      >
        Check my work <AiOutlineArrowDown />
      </button>
    </div>
  );
}
