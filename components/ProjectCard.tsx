"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import Modal from "./Modal";
import ImageModal from "./ImageModal";

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
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showImageModal, setShowImageModal] = useState<boolean>(false)

  return (
    <div className="flex gap-5 justify-around w-4/6 mt-10">
      {project.right ?
        <>
          <Image
            src={project.image}
            alt={project.name + 'project image'}
            width={1920}
            height={1080}
            quality={100}
            sizes="40vw"
            onClick={() => setShowImageModal(true)}
            style={{ cursor: "pointer" }}
          />
          {showImageModal && (
            <ImageModal image={project.image} setShowImageModal={setShowImageModal} />
          )}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
            <p className="text-lg">{project.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <Link href={project.liveLink} target="_blank">
                <button className="border-2 p-2 font-bold border-blue-400 rounded-sm text-blue-400
                relative ease-in duration-300 z-10
                before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10
                after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10
                before:top-0 before:bottom-0 after:top-0 after:bottom-0
                before:right-full before:left-0 after:right-0 after:left-full
                hover:before:right-1/2 hover:after:left-1/2 hover:text-white">
                  Live preview
                </button>
              </Link>
              <div>
                {project.gitHubLink.backend ?
                  <>
                    <button className="font-bold p-1 border-b-2 border-blue-400
                  relative ease-in duration-300 z-10
                before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10
                after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10
                  before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0"
                      onClick={() => setShowModal(true)}
                    >
                      Github Repo
                    </button>
                    {showModal && project.gitHubLink.backend && (
                      <Modal project={project} setShowModal={setShowModal} />
                    )}
                  </>
                  :
                  <Link href={project.gitHubLink.frontend} target="_blank">
                    <button className="font-bold p-1 border-b-2 border-blue-400
                    relative ease-in duration-300 z-10
                  before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10
                  after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10
                    before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0"
                    >
                      Github Repo
                    </button>
                  </Link>
                }
              </div>
            </div>
          </div>
        </> :
        <>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
            <p className="text-lg">{project.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <Link href={project.liveLink} target="_blank">
                <button className="border-2 p-2 font-bold border-blue-400 rounded-sm text-blue-400
              relative ease-in duration-300 z-10
              before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10
              after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10
              before:top-0 before:bottom-0 after:top-0 after:bottom-0
              before:right-full before:left-0 after:right-0 after:left-full
              hover:before:right-1/2 hover:after:left-1/2 hover:text-white">
                  Live preview
                </button>
              </Link>
              <div>
                {project.gitHubLink.backend ?
                  <>
                    <button className="font-bold p-1 border-b-2 border-blue-400
                relative ease-in duration-300 z-10
              before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10
              after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10
                before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0"
                      onClick={() => setShowModal(true)}
                    >
                      Github Repo
                    </button>
                    {showModal && project.gitHubLink.backend && (
                      <Modal project={project} setShowModal={setShowModal} />
                    )}
                  </>
                  :
                  <Link href={project.gitHubLink.frontend} target="_blank">
                    <button className="font-bold p-1 border-b-2 border-blue-400
                  relative ease-in duration-300 z-10
                before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10
                after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10
                  before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0"
                    >
                      Github Repo
                    </button>
                  </Link>
                }
              </div>
            </div>
          </div>
          <Image
            src={project.image}
            alt={project.name + 'project image'}
            width={1920}
            height={1080}
            quality={100}
            sizes="40vw"
            onClick={() => setShowImageModal(true)}
            style={{ cursor: "pointer" }}
          />
          {showImageModal && (
            <ImageModal image={project.image} setShowImageModal={setShowImageModal} />
          )}
        </>
      }
    </div >
  )
}