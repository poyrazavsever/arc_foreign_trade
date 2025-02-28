import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Hizmetler</h2>
          <p className="text-gray-600">
            Hizmetlerimiz hakkında daha fazla bilgi almak ister misiniz?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Sosyal Medya Yönetimi Kartı */}
          <div className="border border-neutral-200 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <Image
                src="/Illus/social-media.png" // Resim yolunu güncelleyin
                alt="Sosyal Medya Yönetimi"
                className="w-full"
                width={200}
                height={150}
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Sosyal Medya Yönetimi
            </h3>
            <p className="text-gray-600">
              Markanızı dijitalde büyütmek için, içerik, reklam ve etkileşim yönetimi sağlıyoruz.
            </p>
          </div>

          {/* Web Site Tasarımı Kartı */}
          <div className="border border-neutral-200 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <Image
                src="/Illus/website-design.png" // Resim yolunu güncelleyin
                alt="Web Site Tasarımı"
                className="w-full"
                width={200}
                height={150}
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Web Site Tasarımı
            </h3>
            <p className="text-gray-600">
              Markanıza özel, modern ve kullanıcı dostu web siteleri tasarlıyoruz.
            </p>
          </div>

          {/* Doğrudan Müşteri Temini */}
          <div className="border border-neutral-200 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <Image
                src="/Illus/customer-finding.png" // Resim yolunu güncelleyin
                alt="Doğru Müşteri Bulma"
                className="w-full"
                width={200}
                height={150}
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Doğrudan Müşteri Temini
            </h3>
            <p className="text-gray-600">
              Yurt içi ve yurt dışında potansiyel müşterilerle birebir iletişime geçerek satış fırsatlarını artırıyoruz.
            </p>
          </div>

          {/* İthalat & İhracat Operasyon Yönetimi */}
          <div className="border border-neutral-200 rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="mb-4">
              <Image
                src="/Illus/foreign.png" // Resim yolunu güncelleyin
                alt="İthalat & İhracat Operasyon Yönetimi"
                className="w-full"
                width={200}
                height={150}
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              İthalat & İhracat Operasyon Yönetimi
            </h3>
            <p className="text-gray-600">
              Tedarikten teslimata kadar tüm dış ticaret süreçlerinizi sorunsuz ve verimli şekilde yönetiyoruz.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button className="bg-primary text-white px-6 py-3 hover:bg-secondary transition">
            Hepsini Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
