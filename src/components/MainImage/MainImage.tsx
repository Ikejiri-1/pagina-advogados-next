import Image, { StaticImageData } from "next/image";

interface MainImageProps {
  img: string | StaticImageData;
  alt: string;
  title?: string;
}

export function MainImage({ img, title, alt }: MainImageProps) {
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src={img}
        alt={alt}
        fill
        style={{ objectFit: "cover", opacity: 0.9 }}
        priority
      />

      {title && (
        <h2
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-white text-2xl font-bold text-center max-w-[80%] 
          uppercase bg-black/50 px-2 py-1 rounded z-10 pointer-events-none 
          drop-shadow-lg"
        >
          {title}
        </h2>
      )}
    </div>
  );
}
