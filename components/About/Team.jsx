import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'Buğrahan Arıcı',
      role: 'Kurucu',
      description: 'Açıklama Açıklama Açıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama',
      image: '/Team/bugrahan.jpeg',
      instagram: 'https://www.instagram.com/bugrahanarici',
      twitter: 'https://twitter.com/bugrahanarici',
      linkedin: 'https://www.linkedin.com/in/bugrahanarici',
    },
    {
      name: 'Poyraz Avsever',
      role: 'Yazılım Geliştirici',
      description: 'Açıklama Açıklama Açıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama',
      image: '/Team/poyraz.jpeg',
      instagram: 'https://www.instagram.com/poyrazavsever',
      twitter: 'https://twitter.com/poyrazavsever',
      linkedin: 'https://www.linkedin.com/in/poyrazavsever',
    },
    {
      name: 'Rafet Nuriyev',
      role: 'Pazarlama Sorumlusu',
      description: 'Açıklama Açıklama Açıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama',
      image: '/Images/herosection.png',
      instagram: 'https://www.instagram.com/rafetnuriyev',
      twitter: 'https://twitter.com/rafetnuriyev',
      linkedin: 'https://www.linkedin.com/in/rafetnuriyev',
    },
    {
      name: 'Doğukan Efe Ersoy',
      role: 'Sosyal Medya Sorumlusu',
      description: 'Açıklama Açıklama Açıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama AçıklamaAçıklama',
      image: '/Team/dogukan.jpeg',
      instagram: 'https://www.instagram.com/dogukanefeersoy',
      twitter: 'https://twitter.com/dogukanefeersoy',
      linkedin: 'https://www.linkedin.com/in/dogukanefeersoy',
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
              <div className="flex justify-start space-x-4">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-600 hover:text-gray-800">
                  <FaInstagram />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-600 hover:text-gray-800">
                  <FaTwitter />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-600 hover:text-gray-800">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;