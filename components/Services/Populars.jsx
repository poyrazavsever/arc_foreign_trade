import React from 'react'
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Sosyal Medya Yönetimi",
    description: "Markanızı dijitalde büyütmek için, içerik, reklam ve etkileşim yönetimi sağlıyoruz.",
    imageSrc: "/Illus/social-media.png",
    alt: "Sosyal Medya Yönetimi"
  },
  {
    title: "Web Site Tasarımı",
    description: "Markanıza özel, modern ve kullanıcı dostu web siteleri tasarlıyoruz.",
    imageSrc: "/Illus/website-design.png",
    alt: "Web Site Tasarımı"
  },
  {
    title: "Doğrudan Müşteri Temini",
    description: "Yurt içi ve yurt dışında potansiyel müşterilerle birebir iletişime geçerek satış fırsatlarını artırıyoruz.",
    imageSrc: "/Illus/customer-finding.png",
    alt: "Doğru Müşteri Bulma"
  },
  {
    title: "İthalat & İhracat Operasyon Yönetimi",
    description: "Tedarikten teslimata kadar tüm dış ticaret süreçlerinizi sorunsuz ve verimli şekilde yönetiyoruz.",
    imageSrc: "/Illus/foreign.png",
    alt: "İthalat & İhracat Operasyon Yönetimi"
  }
];

const Populars = () => {
  return (
    <div className="bg-white py-48">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Popüler Hizmetler</h2>
          <p className="text-gray-600">
            İşletmenizi küresel pazarda güçlendiren stratejik çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} imageSrc={service.imageSrc} alt={service.alt}/>
          ))}
        </div>

      </div>
    </div>
    

  );
}

export default Populars;
