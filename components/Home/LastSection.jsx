import React from 'react';
import Image from 'next/image';

const LastSection = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] mb-12 md:mb-24">
      {/* Resim Bölümü */}
      <div className="w-full lg:w-1/2 relative group overflow-hidden">
        <Image
          src="/Images/lastImage.jpeg" // Resim yolunu güncelleyin
          alt="Meeting Image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
      </div>

      {/* Metin Bölümü */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8"> 
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 text-gray-800">
          Yenilikçi ve Öncü İş Süreçleri
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-neutral-700">
          Uluslararası Ticaret Destek ve Danışmanlık
        </h2>
        <p className="text-lg md:text-xl lg:text-xl mb-8 text-neutral-600">
          Firma ihtiyaçlarınıza özel hazırladığımız Hedef Pazar Raporu ile, Afrika ve Asya'dan gelen
          uzman ekibimizle markanızı küresel pazarlara taşıyoruz. 103 ülkede faaliyet gösteren deneyimli
          profesyonellerimizle, sizin için özel bir uluslararası ticaret departmanı oluşturuyoruz. Küresel
          başarınızı birlikte inşa edelim.
        </p>
      </div>
    </div>
  );
};

export default LastSection;