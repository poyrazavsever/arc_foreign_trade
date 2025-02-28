import React from 'react';
import ServiceCard from './ServiceCard'; // ServiceCard bileşeninin yolunu güncelleyin

const Marketing = () => {
  const services = [
    {
      title: 'Hedef Pazar Belirleme ve Analiz',
      description: 'Doğru hedef kitleye ulaşmanız için pazar araştırması yaparak stratejik yönlendirme sağlıyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Hedef Pazar Belirleme ve Analiz',
    },
    {
      title: 'Pazarlama Performans Analizi',
      description: 'Reklam ve satış süreçlerinizin verimliliğini ölçerek iyileştirme stratejileri geliştiriyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Pazarlama Performans Analizi',
    },
    {
      title: 'Rakip Analizi',
      description: 'Rakiplerinizin güçlü ve zayıf yönlerini analiz ederek sizi pazarda öne çıkaracak stratejiler oluşturuyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Rakip Analizi',
    },
    {
      title: 'İçerik Pazarlaması',
      description: 'Markanız için özgün ve etkili içerikler üreterek dijitalde güçlü bir varlık oluşturuyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'İçerik Pazarlaması',
    },
    {
      title: 'Marka Konumlandırma',
      description: 'Hedef kitlenizin zihninde güçlü bir marka algısı oluşturmak için stratejik konumlandırma yapıyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Marka Konumlandırma',
    },
    {
      title: 'Kültürel ve Dilsel Uyumluluk Danışmanlığı',
      description: 'Hedef pazarınızdaki kültürel ve dilsel farklılıkları gözeterek etkili pazarlama iletişimi sağlıyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Kültürel ve Dilsel Uyumluluk Danışmanlığı',
    },
    {
      title: 'Uluslararası Reklam Kampanyaları',
      description: 'Global pazarlarda markanızı tanıtmak için çok dilli ve bölgesel hedeflemeli reklam stratejileri sunuyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Uluslararası Reklam Kampanyaları',
    },
    {
      title: 'E-Posta Pazarlama ve Otomasyon',
      description: 'Kişiselleştirilmiş e-posta kampanyaları ile müşteri etkileşiminizi artırarak dönüşüm sağlıyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'E-Posta Pazarlama ve Otomasyon',
    },
    {
      title: 'Yurtdışı / Yurtiçi Müşterilerle Telefonla İletişim Kurma',
      description: 'Müşteri ilişkilerinizi güçlendirmek için profesyonel ve etkili telefon görüşmeleri gerçekleştiriyoruz.',
      imageSrc: '/Illus/website-design.png',
      alt: 'Yurtdışı / Yurtiçi Müşterilerle Telefonla İletişim Kurma',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">

        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Uluslararası Pazarlama Hizmetlerimiz
          </h2>
          <p className="text-gray-600">
            Hedef pazar analizi, dijital stratejiler ve yerel uzman desteği ile markanızı uluslararası arenada konumlandırıyoruz. Doğru stratejilerle büyümenize katkı sağlıyor, küresel pazarlarda sürdürülebilir başarı elde etmenizi sağlıyoruz.
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

export default Marketing;