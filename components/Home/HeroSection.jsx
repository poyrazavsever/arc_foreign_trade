import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

const HeroSection = () => {
  const images = [
    '/Images/hero1.jpg',
    '/Images/hero2.jpg',
    '/Images/hero3.jpg'
  ];

  return (
    <div className="relative h-[700px] mt-24 mb-12 md:mb-24">
      {/* Slider Bölümü */}
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image src={src} alt={`Hero Image ${index + 1}`} layout="fill" objectFit="cover" />
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Metin Bölümü */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 text-white z-50">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Markanızı Güçlendirin, Dünyaya Açılın!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl">
          Reklam, dijital pazarlama ve operasyon yönetimiyle markanızı büyütüyoruz. Doğru
          stratejilerle hedef kitlenize ulaştırıyor, uluslararası ekibimizle sınırları aşıyoruz.
          Satış ve teslimat süreçlerinizi profesyonelce yöneterek müşteri memnuniyetini en
          üst seviyeye taşıyoruz.
        </p>
        <div className="flex space-x-4">
          <a href="/about">
            <button className="bg-primary text-white px-6 py-3 hover:bg-blue-700 transition cursor-pointer">
              Hakkımızda
            </button>
          </a>
          <a href="contact">
            <button className="bg-gray-200 text-gray-900 px-6 py-3 hover:bg-gray-300 transition cursor-pointer">
              İletişim
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
