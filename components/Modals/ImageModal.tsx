import Image from "next/image";

type Props = {
  setShowImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}

export default function ImageModal({ setShowImageModal, image }: Props) {

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50" onClick={() => setShowImageModal(false)}>
        <div className="rounded-lg relative bg-[#272727] p-2 max-w-full w-9/12 h-auto max-lg:w-10/12 max-[850px]:w-full">
          <Image
            src={image}
            width={1920}
            height={1080}
            sizes="100vw"
            style={{ cursor: "pointer" }}
            quality={100}
            alt="Modal image"
          />
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-gray-950"></div>
    </>
  )
}