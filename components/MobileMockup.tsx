import Image from "next/image";


interface MobileMockupProps {
  src: string;
  alt: string;
}

export default function MobileMockup({
  src,
  alt,
}: MobileMockupProps) {
  return (
    // <div className="relative w-[280px] h-[560px] rounded-[3rem] border-[10px] border-black bg-black shadow-2xl overflow-hidden mx-auto">
    <div className="relative w-[280px] h-[560px] rounded-[3rem] border-[10px] border-zinc-600 bg-[oklch(44.6% 0.03 256.802)] shadow-2xl overflow-hidden mx-auto">

      {/* Camera Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-600 rounded-b-2xl z-10" />

      {/* Screen */}
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
