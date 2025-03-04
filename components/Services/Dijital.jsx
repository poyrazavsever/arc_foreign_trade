import React from 'react';
import ServiceCard from './ServiceCard'; // ServiceCard bileşeninin yolunu güncelleyin

const Dijital = () => {
  const services = [
    {
      title: 'Sosyal Medya Yönetimi',
      description: 'Markanızı dijitalde büyütmek için içerik, reklam ve etkileşim yönetimi sağlıyoruz.',
      imageSrc: '/Illus/social-media.png',
      alt: 'Sosyal Medya Yönetimi',
    },
    {
      title: 'Web Site Tasarımı',
      description: 'Markanıza özel, modern ve kullanıcı dostu web siteleri tasarlıyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Web Site Tasarımı',
    },
    {
      title: 'Grafik Tasarım',
      description: 'Çarpıcı görsellerle etkileyici marka kimliği oluşturuyoruz.',
      imageSrc: '/Illus/graphic-design.png',
      alt: 'Grafik Tasarım',
    },
    {
      title: 'Takipçi Çalışmaları',
      description: 'Organik büyüme ve etkileşim artırma stratejileri sunuyoruz.',
      imageSrc: '/Illus/follower.png',
      alt: 'Takipçi Çalışmaları',
    },
    {
      title: 'Ürün Fotoğrafı Çekimi',
      description: 'Ürünlerinizi en iyi şekilde sergileyen profesyonel çekimler yapıyoruz.',
      imageSrc: '/Illus/photo.png',
      alt: 'Ürün Fotoğrafı Çekimi',
    },
    {
      title: 'SEO Çalışmaları',
      description: 'Arama motorlarında üst sıralara çıkmanız için stratejik optimizasyon yapıyoruz.',
      imageSrc: '/Illus/seo.png',
      alt: 'SEO Çalışmaları',
    },
    {
      title: 'AdSense (Google Reklam) Çalışmaları',
      description: 'Hedef kitlenize ulaşmanız için etkili reklam kampanyaları oluşturuyoruz.',
      imageSrc: '/Illus/add.png',
      alt: 'AdSense (Google Reklam) Çalışmaları',
    },
    {
      title: 'B2C Satış Platformlarına Ürün Yükleme',
      description: 'Trendyol, Hepsiburada gibi platformlarda satışınızı yönetiyoruz.',
      imageSrc: '/Illus/b2c.png',
      alt: 'B2C Satış Platformlarına Ürün Yükleme',
    },
    {
      title: 'Amazon ve eBay Hesap Açılımı',
      description: 'Küresel pazarda yerinizi almak için hesap açma ve yönetim desteği sunuyoruz.',
      imageSrc: '/Illus/amozon.png',
      alt: 'Amazon ve eBay Hesap Açılımı',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">

        <div className="text-left flex flex-col items-start gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Uluslararası Dijital Görünürlük Hizmetlerimiz
          </h2>
          <p className="text-gray-600">
            Markanızı global pazarda öne çıkarmak için dijital reklam, içerik ve strateji çözümleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              alt={service.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dijital;