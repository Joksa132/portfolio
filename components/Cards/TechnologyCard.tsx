import Image from "next/image";

type Props = {
  techName: string;
  techImg: string
}

export default function TechnologyCard({ techName, techImg }: Props) {

  return (
    <div className="py-4 border rounded-md border-blue-400 flex flex-col items-center gap-2">
      <img
        src={techImg}
        alt={techName + 'image'}
        width={80}
        height={60}
        className="max-md:w-16"
      />
      <span className="text-sm max-md:text-xs">{techName}</span>
    </div>
  )
}