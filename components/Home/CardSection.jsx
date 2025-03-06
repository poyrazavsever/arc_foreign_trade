import React from 'react';
import { FaFileAlt, FaBullhorn, FaGlobe } from 'react-icons/fa';

const CardSection = () => {
  return (
    <div className="flex justify-center items-center py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol Bölüm: Kartlar */}
        <div className="space-y-4">
          {/* Hedef Pazar Raporu Kartı */}
          <div className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg">
              <FaFileAlt className="text-2xl text-blue-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Hedef Pazar Raporu</h3>
              <p className="text-gray-600">Doğru ülkeyi seçin, stratejinizi belirleyin.</p>
            </div>
          </div>

          {/* Reklam & Danışmanlık Kartı */}
          <div className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-pink-200 to-pink-300 rounded-lg">
              <FaBullhorn className="text-2xl text-pink-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Reklam & Danışmanlık</h3>
              <p className="text-gray-600">Markanızı en etkili şekilde konumlandırın.</p>
            </div>
          </div>

          {/* Dış Ticaret Yönetimi Kartı */}
          <div className="bg-gray-100 p-6 rounded-lg flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-200 to-green-300 rounded-lg">
              <FaGlobe className="text-2xl text-green-700" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Dış Ticaret Yönetimi</h3>
              <p className="text-gray-600">Operasyon ve satış süreçlerinizi yönetin.</p>
            </div>
          </div>
        </div>

        {/* Sağ Bölüm: Metin ve Buton */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            İşiniz İçin Bir Danışmandan Daha Fazlası
          </h2>
          <p className="text-gray-600 mb-8">
            Küresel pazara açılmak karmaşık görünebilir. İşte bu yüzden, ARC olarak yalnızca bir danışman değil, sizin dış ticaret departmanınız oluyoruz. Hedef pazar analizinizden, satış ve operasyon süreçlerinize kadar her adımda yanınızdayız. Afrika ve Asya'dan gelen uzman ekibimizle markanızı uluslararası başarıya taşıyoruz.
          </p>

          <a href='/ai-assistant'>
            <button className="bg-primary text-white px-6 py-3 hover:bg-secondary transition">
              İlk Adımı Atın
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardSection;