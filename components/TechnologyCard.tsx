import Image from "next/image";

type Props = {
  techName: string;
  techImg: string
}

export default function TechnologyCard({ techName, techImg }: Props) {

  return (
    <div className="p-2 w-36 border-2 rounded-xl border-blue-400 flex flex-col items-center gap-2">
      <Image src={techImg} alt={techName + 'image'} width={80} height={60} quality={100} />
      <span>{techName}</span>
    </div>
  )
}