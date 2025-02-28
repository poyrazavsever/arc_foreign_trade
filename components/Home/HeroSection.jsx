import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[700px]">

      {/* Metin Bölümü */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8"> 
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
          Markanızı Güçlendirin, Dünyaya Açılın!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700">
          Reklam, dijital pazarlama ve operasyon yönetimiyle markanızı büyütüyoruz. Doğru
          stratejilerle hedef kitlenize ulaştırıyor, uluslararası ekibimizle sınırları aşıyoruz.
          Satış ve teslimat süreçlerinizi profesyonelce yöneterek müşteri memnuniyetini en
          üst seviyeye taşıyoruz.
        </p>
        <div className="flex space-x-4">
          <button className="bg-primary text-white px-6 py-3 hover:bg-blue-700 transition">
            Hakkımızda
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 hover:bg-gray-300 transition">
            Akıllı Asistan
          </button>
        </div>
      </div>

      {/* Resim Bölümü */}
      <div className="w-full lg:w-1/2 relative group overflow-hidden">
        <Image
          src="/Images/herosection.jpg"
          alt="Hero Section Image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>

    </div>
  );
};

export default HeroSection;
