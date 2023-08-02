import Image from "next/image";

type Props = {
  setShowImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}

export default function ImageModal({ setShowImageModal, image }: Props) {

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50" onClick={() => setShowImageModal(false)}>
        <div className="rounded-lg relative flex bg-[#272727] p-2 w-9/12">
          <Image
            src={image}
            width={1920}
            height={1080}
            sizes="100vw"
            style={{ height: "auto", cursor: "pointer" }}
            quality={100}
            alt="Modal image"
          />
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-gray-950"></div>
    </>
  )
}