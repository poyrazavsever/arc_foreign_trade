import React from 'react';
import CompanyCard from './CompanyCard'; // CompanyCard yolunu doğru şekilde ayarlayın

const Company = () => {
  const companies = [
    {
      logoSrc: '/Logos/6.png', // Şah Radyatör logo yolu
      alt: 'Şah Radyatör Logo',
      title: 'Şah Radyatör',
      description: 'Şah Radyatör, 20 yılı aşkın deneyimiyle otomotiv ve sanayi sektörlerine yüksek kaliteli radyatör ve soğutma sistemleri üreten öncü bir firmadır. Yenilikçi üretim teknolojileri ve dayanıklı malzeme kullanımıyla sektörde güvenilir bir marka haline gelen Şah Radyatör, müşteri memnuniyetini ve mühendislik mükemmeliyetini her zaman ön planda tutmaktadır. Hem yerel hem de uluslararası pazarda geniş bir müşteri ağına sahip olan firma, yüksek performanslı ve uzun ömürlü ürünleriyle sektör standartlarını belirlemeye devam etmektedir.',
      servicesTitle: 'ARC Danışmanlık Olarak Şah Radyatör\'e Sağladığımız Hizmetler',
      servicesDescription: 'ARC Danışmanlık olarak, Şah Radyatör\'ün uluslararası pazarda güçlü bir konum elde etmesi için kapsamlı dış ticaret ve pazarlama çözümleri sunduk. Hedef pazar analizleri ile firmanın doğru müşteri kitlesine ulaşmasını sağlarken, dijital pazarlama ve marka konumlandırma stratejileri ile global bilinirliğini artırdık. Kültürel ve dilsel uyumluluk danışmanlığımız sayesinde, farklı ülkelerdeki müşteri beklentilerine uygun etkili iletişim stratejileri geliştirdik. Şah Radyatör\'ün ihracat operasyonlarını optimize ederek, yurtdışı satışlarını artırmasına ve uluslararası rekabette avantaj kazanmasına katkıda bulunduk.',
    },
    // Diğer şirket kartlarını da buraya ekleyebilirsiniz...
  ];

  return (
    <div className="w-full max-w-7xl mx-auto my-24">

        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Çalıştığımız Şirketler
          </h2>
          <p className="text-gray-600">
            Güvenilir iş ortaklarımızla birlikte büyüyor, global pazarda güçlü adımlar atıyoruz. İş birliği yaptığımız şirketleri keşfedin!
          </p>
        </div>

      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
  );
};

export default Company;