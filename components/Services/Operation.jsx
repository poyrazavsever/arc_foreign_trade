import React from 'react';
import ServiceCard from './ServiceCard';

const Operation = () => {
  const services = [
    { title: 'Gümrük', description: 'Gümrük süreçlerinizin sorunsuz ilerlemesi için danışmanlık ve destek sağlıyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Gümrük' },
    { title: 'Lojistik', description: 'Tedarik zincirinizi optimize ederek maliyetleri düşürüyor ve verimliliği artırıyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Lojistik' },
    { title: 'Tercüme', description: 'Uluslararası iş süreçleriniz için profesyonel tercüme hizmetleri sunuyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Tercüme' },
    { title: 'İthalat & İhracat', description: 'İthalat ve ihracat süreçlerinizi yöneterek pazarınızı genişletiyoruz.', imageSrc: '/Illus/website-design.png', alt: 'İthalat & İhracat' },
    { title: 'Uluslararası Pazar Araştırması', description: 'Yeni pazarlara açılmanız için detaylı pazar analizleri yapıyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Uluslararası Pazar Araştırması' },
    { title: 'Uluslararası Müşteri Bulma', description: 'Global pazarlarda potansiyel müşterilere ulaşmanıza yardımcı oluyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Uluslararası Müşteri Bulma' },
    { title: 'Tedarik Zinciri Yönetimi', description: 'Tedarik zincirinizi daha etkin ve sorunsuz yönetmenizi sağlıyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Tedarik Zinciri Yönetimi' },
    { title: 'E-Ticaret Dijital Pazarlama', description: 'Online satışlarınızı artırmak için dijital pazarlama stratejileri geliştiriyoruz.', imageSrc: '/Illus/website-design.png', alt: 'E-Ticaret Dijital Pazarlama' },
    { title: 'Veri Analizi ve Raporlama', description: 'İş süreçlerinizi geliştirmek için veri analizi ve raporlama hizmetleri sunuyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Veri Analizi ve Raporlama' },
    { title: 'Uluslararası Fiyat Araştırması', description: 'Pazardaki fiyatları analiz ederek rekabet avantajı sağlıyoruz.', imageSrc: '/Illus/website-design.png', alt: 'Uluslararası Fiyat Araştırması' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold text-gray-800">Operasyonel Süreç Yönetimi</h2>
          <p className="text-gray-600">İş süreçlerinizi en verimli şekilde yönetebilmeniz için kapsamlı hizmetler sunuyoruz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} imageSrc={service.imageSrc} alt={service.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operation;
