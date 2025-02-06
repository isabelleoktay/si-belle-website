import Image from 'next/image';

interface ParchmentButtonProps {
  imageSrc: string;
  altText: string;
  label: string;
  link: string;
}

const ParchmentButton: React.FC<ParchmentButtonProps> = ({
  imageSrc,
  altText,
  label,
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="relative w-40 h-16 md:w-48 md:h-24 border-4 border-transparent cursor-pointer hover:opacity-80">
        <div className="absolute inset-0">
          <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" />
        </div>
        <span className="relative z-10 text-lg md:text-xl font-bold text-amber-950 tracking-widest">
          {label}
        </span>
      </button>
    </a>
  );
};

export default ParchmentButton;
