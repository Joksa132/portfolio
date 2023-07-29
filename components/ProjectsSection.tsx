type Props = {
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

export default function ProjectsSection({ sectionRefs }: Props) {

  return (
    <section className='h-screen flex flex-col items-center' id='projects' ref={sectionRefs.projects}>
      <div className='flex w-2/4'>
        <h2 className='text-6xl mt-20 border-b-8 border-blue-400 font-bold'>Projects</h2>
      </div>
    </section>
  )
}