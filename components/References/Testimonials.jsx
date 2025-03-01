import React from 'react';
import TestimonialCard from './TestimonialCard';


const testimonials = [
  {
    id: 1,
    name: 'Buğrahan Arıcı',
    date: '04/12/2012',
    text: "ARC Danışmanlık ekibiyle çalışmaya başladığımızdan beri uluslararası pazarlara açılma sürecimiz hızlandı. Hedef pazar analizleri, kültürel uyumluluk danışmanlığı ve dijital pazarlama stratejileri sayesinde satışlarımızda önemli bir artış yaşadık. Ekibin profesyonelliği, yerel pazarlardaki uzmanlığı ve çözüm odaklı yaklaşımı, işimizi büyütmemizde kritik rol oynadı. Güvenilir ve etkili bir danışmanlık hizmeti arayan herkese ARC'yi gönül rahatlığıyla tavsiye ederim.",
    company: ['GlobalTech Yazılım A.Ş.', 'Teknoloji & Yazılım | Türkiye'],
    imageSrc: "/Images/herosection.jpg"
  },
  {
    id: 2,
    name: 'Buğrahan Arıcı',
    date: '04/12/2012',
    text: "ARC Danışmanlık ekibiyle çalışmaya başladığımızdan beri uluslararası pazarlara açılma sürecimiz hızlandı. Hedef pazar analizleri, kültürel uyumluluk danışmanlığı ve dijital pazarlama stratejileri sayesinde satışlarımızda önemli bir artış yaşadık. Ekibin profesyonelliği, yerel pazarlardaki uzmanlığı ve çözüm odaklı yaklaşımı, işimizi büyütmemizde kritik rol oynadı. Güvenilir ve etkili bir danışmanlık hizmeti arayan herkese ARC'yi gönül rahatlığıyla tavsiye ederim.",
    company: ['GlobalTech Yazılım A.Ş.', 'Teknoloji & Yazılım | Türkiye'],
    imageSrc: "/Images/herosection.jpg"
  },
  {
    id: 3,
    name: 'Buğrahan Arıcı',
    date: '04/12/2012',
    text: "ARC Danışmanlık ekibiyle çalışmaya başladığımızdan beri uluslararası pazarlara açılma sürecimiz hızlandı. Hedef pazar analizleri, kültürel uyumluluk danışmanlığı ve dijital pazarlama stratejileri sayesinde satışlarımızda önemli bir artış yaşadık. Ekibin profesyonelliği, yerel pazarlardaki uzmanlığı ve çözüm odaklı yaklaşımı, işimizi büyütmemizde kritik rol oynadı. Güvenilir ve etkili bir danışmanlık hizmeti arayan herkese ARC'yi gönül rahatlığıyla tavsiye ederim.",
    company: ['GlobalTech Yazılım A.Ş.', 'Teknoloji & Yazılım | Türkiye'],
    imageSrc: "/Images/herosection.jpg"
  },
  {
    id: 4,
    name: 'Buğrahan Arıcı',
    date: '04/12/2012',
    text: "ARC Danışmanlık ekibiyle çalışmaya başladığımızdan beri uluslararası pazarlara açılma sürecimiz hızlandı. Hedef pazar analizleri, kültürel uyumluluk danışmanlığı ve dijital pazarlama stratejileri sayesinde satışlarımızda önemli bir artış yaşadık. Ekibin profesyonelliği, yerel pazarlardaki uzmanlığı ve çözüm odaklı yaklaşımı, işimizi büyütmemizde kritik rol oynadı. Güvenilir ve etkili bir danışmanlık hizmeti arayan herkese ARC'yi gönül rahatlığıyla tavsiye ederim.",
    company: ['GlobalTech Yazılım A.Ş.', 'Teknoloji & Yazılım | Türkiye'],
    imageSrc: "/Images/herosection.jpg"
  },
];



const Testimonials = () => {
  return (
    <div className="py-16 text-center mt-36">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Referanslarımız</h2>
      <p className="text-gray-600 mb-8 max-w-6xl mx-auto px-4 md:px-0 pb-12">
        Referanslarımız yorumları, sunduğumuz hizmetlerin en iyi göstergesidir. İş birliklerimizden doğan başarı hikayelerini keşfedin!
      </p>
      <div className="flex items-center justify-center">
        <div className="grid gap-6 sm:grid-cols-2 max-w-7xl mx-auto px-4 md:px-0">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
