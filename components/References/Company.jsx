import React from 'react';
import CompanyCard from './CompanyCard'; // CompanyCard yolunu doğru şekilde ayarlayın

const Company = () => {
  const companies = [
    {
      logoSrc: "/Logos/6.png",
      alt: "Şah Radyatör Logo",
      title: "Şah Radyatör",
      description: "Şah Radyatör, 20 yılı aşkın deneyimiyle otomotiv ve sanayi sektörlerine yüksek kaliteli radyatör ve soğutma sistemleri üreten öncü bir firmadır. Yenilikçi üretim teknolojileri ve dayanıklı malzeme kullanımıyla sektörde güvenilir bir marka haline gelen Şah Radyatör, müşteri memnuniyetini ve mühendislik mükemmeliyetini her zaman ön planda tutmaktadır. Hem yerel hem de uluslararası pazarda geniş bir müşteri ağına sahip olan firma, yüksek performanslı ve uzun ömürlü ürünleriyle sektör standartlarını belirlemeye devam etmektedir.",
      servicesTitle: "ARC Danışmanlık Olarak Şah Radyatör'e Sağladığımız Hizmetler",
      servicesDescription: "ARC Danışmanlık olarak, Şah Radyatör'ün uluslararası pazarda güçlü bir konum elde etmesi için kapsamlı dış ticaret ve pazarlama çözümleri sunduk. Hedef pazar analizleri ile firmanın doğru müşteri kitlesine ulaşmasını sağlarken, dijital pazarlama ve marka konumlandırma stratejileri ile global bilinirliğini artırdık. Kültürel ve dilsel uyumluluk danışmanlığımız sayesinde, farklı ülkelerdeki müşteri beklentilerine uygun etkili iletişim stratejileri geliştirdik. Şah Radyatör'ün ihracat operasyonlarını optimize ederek, yurtdışı satışlarını artırmasına ve uluslararası rekabette avantaj kazanmasına katkıda bulunduk."
    },
    {
      logoSrc: "/Logos/8.png",
      alt: "Yetpar Logo",
      title: "Yetpar",
      description: "Yetpar Makina olarak, iş makinaları yedek parça tedariki ve üretiminde ulusal ve uluslararası arenada öncü bir marka olmak, yenilikçi çözümlerle sektöre yön vermek ve müşteri memnuniyetini en üst seviyeye çıkarmak. Sürdürülebilir iş modelleri ve yüksek kalite anlayışımızla sektörde güvenilirliği ve liderliği temsil etmeyi hedefliyoruz.",
      servicesTitle: "ARC Danışmanlık Olarak Yetpar'a Sağladığımız Hizmetler",
      servicesDescription: "ARC Danışmanlık olarak, Yetpar'ın küresel pazarlarda büyümesine destek verdik. Hedef pazar analizleri, dijital görünürlük artırma stratejileri ve uluslararası ticaret danışmanlığı ile firmanın sektördeki konumunu güçlendirdik."  
    },
    {
      logoSrc: "/Logos/2.png",
      alt: "İlhan Uluslararası Taşımacılık Logo",
      title: "İlhan Uluslararası Taşımacılık",
      description: "İlhan Uluslararası Taşımacılık, lojistik ve taşımacılık sektöründe güvenilir ve yenilikçi çözümler sunan öncü bir firmadır. Global taşımacılık ağı sayesinde hızlı ve verimli lojistik hizmetleri sağlayarak müşteri memnuniyetini en üst seviyeye çıkarmayı hedeflemektedir.",
      servicesTitle: "ARC Danışmanlık Olarak İlhan Uluslararası Taşımacılık'a Sağladığımız Hizmetler",
      servicesDescription: "ARC Danışmanlık olarak, İlhan Uluslararası Taşımacılık'ın küresel lojistik operasyonlarını güçlendirmek ve pazar genişlemesine destek olmak için dış ticaret ve stratejik yönetim hizmetleri sunduk. Uluslararası düzenlemelere uyum sağlayarak daha rekabetçi bir konuma ulaşmasına katkıda bulunduk."
    },
    {
      logoSrc: "/Logos/1.png",
      alt: "EKSFORM Logo",
      title: "EKSFORM",
      description: "Form Plastik- Adnan E. Bölükoğlu ve Onur Kalıp Sanayi- Hakan Ergen olarak Mayıs 2008 itibarıyle güçlerimizi EKS FORM Plastik Metal Kalıp Sanayi Ticaret Limited Şirketi olarak kurumsal bir çatı altında birleştirdik. Amacımız sizlerin isteklerini ileri teknolojiyle, yeni ürünler ve hizmetler içeren mükemmel çözümlerle karşılayarak büyümek, artan katma değerler kazandırmak.",
      servicesTitle: "ARC Danışmanlık Olarak EKSFORM'a Sağladığımız Hizmetler",
      servicesDescription: "ARC Danışmanlık olarak, EKSFORM'un endüstriyel üretim süreçlerini optimize etmek ve uluslararası pazarda etkin bir yer edinmesini sağlamak için stratejik danışmanlık sunduk. Pazar araştırmaları ve marka yönetimi konularında destek sağlayarak firmanın küresel ölçekte tanınırlığını artırmasına yardımcı olduk."
    },
    {
      logoSrc: "/Logos/3.png",
      alt: "Konar İnşaat Logo",
      title: "Konar İnşaat",
      description: "30 yıldır inşaat sektöründe faaliyetlerine devam eden Konar İnşaat, imza attığı seçkin projeleriyle yeni ve modern Türkiye’ye katkılar sunmuştur. Gayrimenkul sektörünün lideri olarak, doğa ve çevreyle barışık, bulunduğu bölgelere değer katan nitelikli yaşam alanları geliştirmektedir.",
      servicesTitle: "ARC Danışmanlık Olarak Konar İnşaat'a Sağladığımız Hizmetler",
      servicesDescription: "ARC Danışmanlık olarak, Konar İnşaat'ın marka bilinirliğini artırarak uluslararası yatırımcılarla olan ilişkilerini geliştirdik. Pazar analizleri, kurumsal kimlik yönetimi ve dijital pazarlama stratejileri ile firmanın hedef kitleye ulaşmasını sağladık."
    },
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