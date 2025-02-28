import React from 'react';
import { FaLightbulb, FaHeadphonesAlt, FaUsers, FaCheckCircle } from 'react-icons/fa';

const OurValues = () => {
  return (
    <div className="bg-white py-16 md:py-36">
      <div className="container mx-auto px-4">

        <div className="text-right mb-12 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold text-gray-800 w-full">Değerlerimiz</h2>
          <p className="text-gray-600">
            Her biri kendi bölgesindeki pazar dinamiklerine hakim, deneyimli profesyonellerden oluşan dinamik ekibimizle, global başarınızı inşa etmek için yanınızdayız. Yenilikçi çözümlerimiz ve yerel bilgi birikimimizle her adımda sizi destekliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-4 md:pt-8">
          {/* Yenilikçilik Kartı */}
          <div className="border border-gray-300 rounded-lg p-6">
            <div className="flex justify-start mb-4">
              <FaLightbulb className="text-4xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Yenilikçilik</h3>
            <p className="text-gray-600">
              Sürekli olarak yeni fikirler geliştiriyor ve sektördeki gelişmeleri takip ederek her zaman en ileri düzeyde çözümler sunuyoruz. Müşterilerimizin ihtiyaçlarına uygun yenilikçi yaklaşımlar oluşturuyoruz.
            </p>
          </div>

          {/* Müşteri Odaklılık Kartı */}
          <div className="border border-gray-300 rounded-lg p-6">
            <div className="flex justify-start mb-4">
              <FaHeadphonesAlt className="text-4xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Müşteri Odaklılık</h3>
            <p className="text-gray-600">
              Müşterilerimizin başarılarını ön planda tutarak onların ihtiyaçlarını anlıyor ve her projede en yüksek müşteri memnuniyetini sağlamaya odaklanıyoruz.
            </p>
          </div>

          {/* Ekip Çalışması Kartı */}
          <div className="border border-gray-300 rounded-lg p-6">
            <div className="flex justify-start mb-4">
              <FaUsers className="text-4xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ekip Çalışması</h3>
            <p className="text-gray-600">
              Başarıya giden yolda birlikte çalışmanın gücüne inanıyoruz. Ekip üyelerimiz arasındaki işbirliği, her projede en etkili ve verimli çözümleri üretmemizi sağlar.
            </p>
          </div>

          {/* Mükemmeliyet Kartı */}
          <div className="border border-gray-300 rounded-lg p-6">
            <div className="flex justify-start mb-4">
              <FaCheckCircle className="text-4xl text-gray-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mükemmeliyet</h3>
            <p className="text-gray-600">
              Her projede en yüksek standartları benimseyerek, mükemmellik için çalışıyoruz. Kaliteye olan bağlılığımız, bize sektördeki liderliğimizi sağlar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;