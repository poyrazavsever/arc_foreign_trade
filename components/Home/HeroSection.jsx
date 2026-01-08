import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  const images = [
    "/Images/hero1.jpg",
    "/Images/hero2.jpg",
    "/Images/hero3.jpg",
  ];

  return (
    <div className="relative h-[80vh] mt-24">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bottom": "16px",
        }}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Hero Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
