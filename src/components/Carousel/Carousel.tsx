"use client";

import Image, { StaticImageData } from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Carousel.css";

interface CarouselProps {
  carouselItems: {
    id: number;
    img: string | StaticImageData;
    alt: string;
    title?: string;
  }[];
}

export function Carousel({ carouselItems }: CarouselProps) {
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[60vh]"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <Image
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover opacity-90"
              />
              {item.title && (
                <h2
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               text-white text-3xl font-bold text-center 
                               bg-black bg-opacity-50 px-4 py-2 rounded-md uppercase 
                               shadow-lg pointer-events-none"
                >
                  {item.title}
                </h2>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
