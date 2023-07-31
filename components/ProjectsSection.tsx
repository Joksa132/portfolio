import { projects } from "@/utils/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

export default function ProjectsSection({ sectionRefs }: Props) {

  return (
    <section className='min-h-screen overflow-y-auto flex flex-col items-center' id='projects' ref={sectionRefs.projects}>
      <div className='flex w-4/6'>
        <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold'>Projects</h2>
      </div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  )
}