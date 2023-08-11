"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import Modal from "../Modals/Modal";
import ImageModal from "../Modals/ImageModal";
import { enqueueSnackbar } from "notistack";

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
    <div className="flex gap-5 justify-around w-4/6 mt-10 max-xl:w-5/6 max-lg:w-11/12 max-[850px]:flex-col">
      {project.right ?
        <>
          <img
            src={project.image}
            alt={project.name + 'project image'}
            width={1920}
            height={1080}
            onClick={() => setShowImageModal(true)}
            style={{ cursor: "pointer", height: "auto" }}
            className="w-[600px] max-lg:w-[500px] max-[850px]:hidden"
          />
          {showImageModal && (
            <ImageModal image={project.image} setShowImageModal={setShowImageModal} />
          )}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-6 max-lg:text-3xl max-[400px]:text-2xl">{project.name}</h2>
            <p className="text-lg max-[400px]:text-sm">{project.description}</p>
            <div className="flex items-center gap-4 mt-6">
              {project.liveLink === "" ?
                <button
                  onClick={() => enqueueSnackbar('Live preview not available. No free backend host.', { variant: 'error' })}
                  className="border-2 p-2 font-bold border-blue-400 rounded-sm text-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:top-0 before:bottom-0 after:top-0 after:bottom-0 before:right-full before:left-0 after:right-0 after:left-full hover:before:right-1/2 hover:after:left-1/2 hover:text-white max-[400px]:text-sm"
                >
                  Live preview
                </button>
                : <Link
                  href={project.liveLink}
                  target="_blank"
                  className="border-2 p-2 font-bold border-blue-400 rounded-sm text-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:top-0 before:bottom-0 after:top-0 after:bottom-0 before:right-full before:left-0 after:right-0 after:left-full hover:before:right-1/2 hover:after:left-1/2 hover:text-white max-[400px]:text-sm"
                >
                  Live preview
                </Link>}
              <div>
                {project.gitHubLink.backend ?
                  <>
                    <button className="font-bold p-1 border-b-2 border-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0 max-[400px]:text-sm"
                      onClick={() => setShowModal(true)}
                    >
                      Github Repo
                    </button>
                    {showModal && project.gitHubLink.backend && (
                      <Modal project={project} setShowModal={setShowModal} />
                    )}
                  </>
                  :
                  <Link
                    href={project.gitHubLink.frontend}
                    target="_blank"
                    className="font-bold p-1 border-b-2 border-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0 max-[400px]:text-sm"
                  >
                    Github Repo
                  </Link>
                }
              </div>
            </div>
          </div>
          <img
            src={project.image}
            alt={project.name + 'project image'}
            width={1920}
            height={1080}
            onClick={() => setShowImageModal(true)}
            style={{ cursor: "pointer", height: "auto" }}
            className="hidden max-[850px]:block max-[850px]:w-[650px]"
          />
        </> :
        <>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-6 max-lg:text-3xl max-[400px]:text-2xl">{project.name}</h2>
            <p className="text-lg max-[400px]:text-sm">{project.description}</p>
            <div className="flex items-center gap-4 mt-6">
              {project.liveLink === "" ?
                <button
                  onClick={() => enqueueSnackbar('Live preview not available. No free backend host.', { variant: 'error' })}
                  className="border-2 p-2 font-bold border-blue-400 rounded-sm text-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:top-0 before:bottom-0 after:top-0 after:bottom-0 before:right-full before:left-0 after:right-0 after:left-full hover:before:right-1/2 hover:after:left-1/2 hover:text-white max-[400px]:text-sm"
                >
                  Live preview
                </button>
                : <Link
                  href={project.liveLink}
                  target="_blank"
                  className="border-2 p-2 font-bold border-blue-400 rounded-sm text-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:top-0 before:bottom-0 after:top-0 after:bottom-0 before:right-full before:left-0 after:right-0 after:left-full hover:before:right-1/2 hover:after:left-1/2 hover:text-white max-[400px]:text-sm"
                >
                  Live preview
                </Link>}
              <div>
                {project.gitHubLink.backend ?
                  <>
                    <button className="font-bold p-1 border-b-2 border-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0 max-[400px]:text-sm"
                      onClick={() => setShowModal(true)}
                    >
                      Github Repo
                    </button>
                    {showModal && project.gitHubLink.backend && (
                      <Modal project={project} setShowModal={setShowModal} />
                    )}
                  </>
                  :
                  <Link
                    href={project.gitHubLink.frontend}
                    target="_blank"
                    className="font-bold p-1 border-b-2 border-blue-400 relative ease-in duration-300 z-10 before:bg-blue-400 before:ease-in before:duration-300 before:absolute before:-z-10 after:bg-blue-400 after:ease-in after:duration-300 after:absolute after:-z-10 before:bottom-0 before:top-full before:right-0 before:left-0 hover:before:top-0 max-[400px]:text-sm"
                  >
                    Github Repo
                  </Link>
                }
              </div>
            </div>
          </div>
          <img
            src={project.image}
            alt={project.name + 'project image'}
            width={1920}
            height={1080}
            onClick={() => setShowImageModal(true)}
            style={{ cursor: "pointer", height: "auto" }}
            className="w-[600px] max-lg:w-[500px] max-[850px]:w-[650px]"
          />
          {showImageModal && (
            <ImageModal image={project.image} setShowImageModal={setShowImageModal} />
          )}
        </>
      }
    </div >
  )
}