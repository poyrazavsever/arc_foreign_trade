import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'Buğrahan Arıcı',
      role: 'CEO & Kurucu',
      description: 'Stratejik bakış açısıyla ekibi yönlendiren, inovasyonu teşvik eden ve projeleri ileriye taşıyan isim.',
      image: '/Team/bugrahan.jpeg',
    },
    {
      name: 'Poyraz Avsever',
      role: 'Yazılım Geliştirici',
      description: 'Güçlü ve sürdürülebilir yazılım çözümleri geliştiren, teknolojiyi en verimli şekilde kullanan uzman.',
      image: '/Team/poyraz.jpeg',
    },
    {
      name: 'Rafet Nuriyev',
      role: 'Pazarlama Kordinatörü',
      description: 'Markanın doğru kitleye ulaşmasını sağlayan, pazarlama stratejilerini şekillendiren ve büyümeyi hızlandıran profesyonel.',
      image: '/Team/rafet.jpeg',
    },
    {
      name: 'Doğukan Efe Ersoy',
      role: 'Grafik Tasarımcı',
      description: 'Estetik ve iletişim dilini belirleyen, etkileyici tasarımlarla projelere kimlik kazandıran sanatçı.',
      image: '/Team/dogukan.jpeg',
    },
    {
      name: 'Nare Dite Dede Keita',
      role: 'Kuzey Afrika Sorumlusu',
      description: 'Takımın gelişimine katkı sağlayan, öğrenmeye açık ve yenilikçi bir ekip arkadaşı.',
      image: '/Team/nare.jpeg',
    },
    {
      name: 'Zeeyad Sani Adamu',
      role: 'Güney Afrika Sorumlusu',
      description: 'Teknoloji ve iş dünyasında kendini geliştiren, dinamik bir ekip arkadaşı.',
      image: '/Team/zeeyad.jpeg',
    },
    {
      name: 'Suliaman Muhammad',
      role: 'Doğu Afrika Sorumlusu',
      description: 'Yenilikçi fikirleriyle ekibe enerji katan, istekli bir ekip arkadaşı.',
      image: '/Team/suliaman.jpeg',
    },
    {
      name: 'Selwa Ismail Kayad',
      role: 'Afrika Genel Kordinatörü',
      description: 'Yaratıcı bakış açısıyla projelere katkı sağlayan bir ekip arkadaşı.',
      image: '/Team/selwa.jpeg',
    },
  ];

  return (
    <div className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-left flex flex-col items-start gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Takımımızla Tanışın!</h2>
          <p className="text-gray-600">
            Her biri kendi bölgesindeki pazar dinamiklerine hakim, deneyimli profesyonellerden oluşan dinamik ekibimizle, global başarınızı inşa etmek için yanınızdayız. Yenilikçi çözümlerimiz ve yerel bilgi birikimimizle her adımda sizi destekliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <div className="mb-4">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 rounded object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;