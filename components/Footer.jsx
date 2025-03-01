import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaClock, FaPhone } from 'react-icons/fa';
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
              <li>
                <Link href="/" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Ana Sayfa
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Hakkımızda
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Hizmetlerimiz
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Ürünler
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/references" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Referanslar
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/ai-assistant" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Akıllı Asistan
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <Link href="/privacy-policy" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Gizlilik Metnimiz
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/policies" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Politikalarımız
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/careers" passHref>
                  <span className="block text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                    Kariyer Planlama
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <a href="tel:+905316967868" className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                  <FaPhone className="mr-2" />
                  0531 696 78 68

                </a>
              </li>
              <li>
                <a href="https://wa.me/05316967868" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                  <FaWhatsapp className="mr-2" />
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="mailto:info@arcforeigntrade.com" className="flex items-center text-neutral-50 hover:text-blue-200 transition-colors duration-300">
                  <MdEmail className="mr-2" />
                  info@arcforeigntrade.com
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
          <a href="https://www.linkedin.com/company/arc-foreign-trade" target="_blank" className="text-neutral-50 hover:text-blue-200 transition-colors duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/arcforeigntrade/" target="_blank" className="text-neutral-50 hover:text-blue-200 transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-neutral-50">
          <p>© 20200 ARC FOREIGN TRADE</p>
          <p>Ostim 068 Ostim Prestij İş Merkezi 2.Kat Yenimahalle / ANKARA</p>
        </div>

        {/* Description Section */}
        <div className="mt-8 grid grid-cols-1 mdz:grid-cols-2 gap-6">
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
