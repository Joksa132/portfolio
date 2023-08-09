import { projects } from "@/utils/projects";
import ProjectCard from "../Cards/ProjectCard";

type Props = {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function ProjectsSection({ sectionRefs }: Props) {

  return (
    <section className='flex flex-col items-center' id='projects' ref={sectionRefs.projects}>
      <div className='flex w-4/6 max-xl:w-5/6 max-lg:w-11/12'>
        <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold max-[550px]:text-5xl'>Projects</h2>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  )
}