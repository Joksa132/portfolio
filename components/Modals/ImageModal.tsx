type Props = {
  setShowImageModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
}

export default function ImageModal({ setShowImageModal, image }: Props) {

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50" onClick={() => setShowImageModal(false)}>
        <div className="rounded-lg relative p-2 h-auto">
          <img
            src={image}
            width={1920}
            height={1080}
            sizes="100vw"
            style={{ cursor: "pointer", maxHeight: "90vh", objectFit: "contain" }}
            alt="Modal image"
          />
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-gray-950"></div>
    </>
  )
}