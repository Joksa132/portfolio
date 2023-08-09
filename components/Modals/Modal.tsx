import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'

type Project = {
  name: string;
  image: string;
  description: string;
  liveLink: string;
  gitHubLink: {
    frontend: string;
    backend?: string;
  };
  right: boolean;
}

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  project: Project
}

export default function Modal({ setShowModal, project }: Props) {

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50">
        <div className="rounded-lg relative flex flex-col bg-[#272727] p-2 w-80 max-[500px]:w-60 max-[350px]:w-48">
          <div className="flex justify-between p-2">
            <h3 className="text-3xl font-bold max-[500px]:text-2xl">
              Open:
            </h3>
            <button className="p-1 text-2xl hover:text-blue-400" onClick={() => setShowModal(false)}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="relative p-2 flex flex-col">
            <Link href={project.gitHubLink.frontend} target="_blank">
              <span
                className="p-1 rounded-md text-lg text-white hover:bg-blue-500 flex items-center gap-1 max-[500px]:text-[15px]"
                onClick={() => setShowModal(false)}
              >
                <HiOutlineExternalLink />
                Frontend Repo
              </span>
            </Link>
            {project.gitHubLink.backend && (
              <Link href={project.gitHubLink.backend} target="_blank">
                <span
                  className="p-1 rounded-md text-lg text-white hover:bg-blue-500 flex items-center gap-1 max-[500px]:text-[15px]"
                  onClick={() => setShowModal(false)}
                >
                  <HiOutlineExternalLink />
                  Backend Repo
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-gray-950"></div>
    </>
  )
}