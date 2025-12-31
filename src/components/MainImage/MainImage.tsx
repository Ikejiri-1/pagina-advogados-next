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

  const phone = "12981131591";
  const message = "Ola, gostaria de saber mais!";

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

      {title && (
        <div className="main-image-title">
          <div className="slide-wrapper-title">{title}</div>
        </div>
      )}

      {description && (
        <div className="main-image-description">
          <div className="slide-wrapper-description">{description}</div>
        </div>
      )}

      {button && (
        <Link href={whatsappLink(phone, message)} target="_blank">
          <div className="main-image-button">
            <div className="slide-wrapper-button">
              <button>{buttonText}</button>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
