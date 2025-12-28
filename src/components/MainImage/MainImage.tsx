"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import "./MainImage.css";

interface MainImageProps {
  img: string | StaticImageData;
  alt: string;
  title?: string;
}

export function MainImage({ img, title, alt }: MainImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const scrollY = window.scrollY;

      imageRef.current.style.transform = `translateY(${
        scrollY * 0.25
      }px) scale(1.05)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-image-container">
      <div ref={imageRef} className="main-image">
        <Image
          src={img}
          alt={alt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {title && <h2 className="main-image-title">{title}</h2>}
    </div>
  );
}
