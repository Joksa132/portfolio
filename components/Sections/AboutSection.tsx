import TechnologyCard from "@/components/Cards/TechnologyCard";
import { technologies } from "@/utils/technologies";

type Props = {
  isAboutVisible: boolean;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
};

export default function AboutSection({ sectionRefs, isAboutVisible }: Props) {
  const firstFiveTechnologies = technologies.slice(0, 5);
  const secondFiveTechnologies = technologies.slice(5, 10);

  return (
    <section
      className="flex flex-col items-center min-h-screen"
      id="about"
      ref={sectionRefs.about}
    >
      <div className="w-4/6 flex max-xl:w-5/6 max-lg:w-11/12">
        <h2 className="text-6xl mt-20 border-b-8 border-blue-400 font-bold max-[550px]:text-5xl">
          About
        </h2>
      </div>
      <div className="mt-5 flex flex-col items-center w-full">
        <p className="text-lg w-4/6 max-xl:w-5/6 max-lg:w-11/12 max-md:text-sm">
          I am a Bachelor with Honours in Information Technology Engineering,
          commited to continuous learning with a constant drive to improve my
          skills in Web Development.
        </p>
        <div className="w-4/6 mt-10 grid gap-2 max-xl:w-5/6 max-lg:w-11/12">
          <div
            className={`first-row grid grid-cols-5 gap-2 opacity-0 max-sm:hidden ${
              isAboutVisible ? "card-left-animation" : ""
            }`}
          >
            {firstFiveTechnologies.map((technology, index) => (
              <TechnologyCard
                key={index}
                techName={technology?.name}
                techImg={technology?.image}
              />
            ))}
          </div>
          <div
            className={`second-row grid grid-cols-5 gap-2 opacity-0 max-sm:hidden ${
              isAboutVisible ? "card-right-animation" : ""
            }`}
          >
            {secondFiveTechnologies.map((technology, index) => (
              <TechnologyCard
                key={index}
                techName={technology?.name}
                techImg={technology?.image}
              />
            ))}
          </div>
          <div
            className={`hidden max-sm:flex opacity-0 max-sm:flex-wrap max-sm:gap-5 max-sm:justify-center ${
              isAboutVisible ? "card-right-animation" : ""
            }`}
          >
            {technologies.map((technology, index) => (
              <TechnologyCard
                key={index}
                techName={technology?.name}
                techImg={technology?.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
