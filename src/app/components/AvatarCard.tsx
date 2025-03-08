import Image from "next/image";

interface AvatarCardProps {
  src: string;
  name: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
      <div className="w-24 h-24 rounded-full border-4 border-amber-500 overflow-hidden shadow-lg bg-white">
        <Image src={src} alt={name} width={96} height={96} className="object-cover w-full h-full" />
      </div>
      <p className="mt-3 text-center text-lg font-semibold text-gray-800">{name}</p>
    </div>
  );
};

export default AvatarCard;
