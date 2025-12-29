"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import "./MainImage.css";
import { whatsappLink } from "@/utils/linkWpp";

interface MainImageProps {
  img: StaticImageData;
  title?: string;
  alt: string;
  description?: string;
  button?: boolean;
  buttonText?: string;
}

export function MainImage({
  img,
  title,
  alt,
  description,
  button,
  buttonText,
}: MainImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `translateY(${
        window.scrollY * 0.25
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
      {description && <p className="main-image-description">{description}</p>}

      {button && (
        <Link href={whatsappLink} target="_blank">
          <button>{buttonText}</button>
        </Link>
      )}
    </div>
  );
}
