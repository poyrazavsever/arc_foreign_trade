import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaWhatsapp, FaClock, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 md:py-16 mt-8">
      {/* Logo Section */}
      <div className="flex justify-center pb-16">
        <Image src="/Images/Logo.png" alt="ARC Dış Ticaret Logo" width={150} height={50} />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sayfalar</h3>
            <ul className="flex flex-col items-start gap-4">
              {['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Ürünler', 'Referanslar', 'Blog', 'Akıllı Asistan'].map((page, index) => (
                <li key={index}>
                  <Link href={`/${page.toLowerCase().replace(' ', '-')}`}>
                    <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                      {page}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="flex flex-col items-start gap-4">
              {['Gizlilik Metnimiz', 'Politikalarımız', 'Kariyer Planlama'].map((legal, index) => (
                <li key={index}>
                  <Link href={`/${legal.toLowerCase().replace(' ', '-')}`}>
                    <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                      {legal}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <a href="tel:123456789" className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                  <FaPhone className="mr-2" />
                  123 456 789
                </a>
              </li>
              <li>
                <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                  <FaWhatsapp className="mr-2" />
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="mailto:destek@arcforeigntrade.com" className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                  <MdEmail className="mr-2" />
                  destek@arcforeigntrade.com
                </a>
              </li>
              <li className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                <FaClock className="mr-2" />
                Açık Olduğumuz Saatler 08:00-21:00
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-neutral-50 hover:text-blue-200 transition-colors duration-300">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-neutral-50 hover:text-blue-200 transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-neutral-50 hover:text-blue-200 transition-colors duration-300">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-neutral-50">
          <p>© 20200 ARC FOREIGN TRADE</p>
          <p>Ostim 068 Ostim Prestij İş Merkezi 2.Kat Yenimahalle / ANKARA</p>
        </div>

        {/* Description Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p>
              Firmamız, sektördeki en yenilikçi çözümlerle, iş süreçlerimizi daha verimli hale getirir. Deneyimli ekibimizle, size özel stratejiler geliştirerek hedeflerinize ulaşmanızı sağlar. Teknolojik altyapımız ve ISO 9001 ilkelerimiz sayesinde, küresel pazarlarda güçlü bir yer edinmeniz için gerekli tüm desteği sunuyoruz.
            </p>
          </div>
          <div>
            <p>
              Firmamız, iş dünyasında başarıya ulaşmanız için gereken tüm desteği sunar. Yenilikçi çözümlerimiz, deneyimli ekibimiz ve güçlü altyapımızla her sektöre özel stratejiler üretiyoruz. Amacımız, iş süreçlerinizi daha verimli hale getirerek, küresel pazarlarda rekabet gücünüzü artırmak ve sürdürülebilir başarı sağlamaktır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
