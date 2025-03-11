import Head from "next/head";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  // State tanımlamaları
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Yükleniyor toast mesajı
    toast.loading('Gönderiliyor...', { id: 'loading' });
  
    // Form verilerini bir nesneye toplayalım
    const formData = {
      name,
      surname,
      email,
      phone,
      topic,
      message,
    };
  
    // EmailJS ile formu gönderme
    emailjs
      .send(
        'service_nswtoxh', // Service ID
        'template_vl17k6e', // Template ID
        formData, // Form verilerini nesne olarak gönderiyoruz
        'aQxL6h9n3Y7K-qnm3' // Public Key
      )
      .then(
        (result) => {
          // Başarılı toast mesajı
          toast.success('Mesajınız başarıyla gönderildi!', { id: 'loading' });
        },
        (error) => {
          // Hata toast mesajı
          toast.error('Mesaj gönderilirken bir hata oluştu!', { id: 'loading' });
        }
      );
  };
  
  return (
    <div className="container mx-auto flex flex-col md:flex-row mt-36">
      <Head>
        <title>İletişim | ARC Foreign Trade | Bize sorularınızı sorun!</title>
        <meta name="description" content="ARC Foreign Trade ile iletişime geçin. Danışmanlık, reklam, pazarlama ve genel konular için bizimle bağlantıya geçin." />
        <meta name="keywords" content="ARC Foreign Trade, ticaret, danışmanlık, pazarlama, iletişim" />
        <meta name="author" content="ARC Foreign Trade" />
        
        {/* Open Graph Meta Tags (Facebook, LinkedIn vb.) */}
        <meta property="og:title" content="İletişim | ARC Foreign Trade" />
        <meta property="og:description" content="Bizimle iletişime geçerek ticaret, danışmanlık, reklam ve pazarlama alanlarında destek alabilirsiniz!" />
        <meta property="og:image" content="https://www.arcforeigntrade.com/images/contact-banner.jpg" />
        <meta property="og:url" content="https://www.arcforeigntrade.com/iletisim" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="İletişim | ARC Foreign Trade" />
        <meta name="twitter:description" content="Bizimle iletişime geçerek ticaret, danışmanlık, reklam ve pazarlama alanlarında destek alabilirsiniz!" />
        <meta name="twitter:image" content="https://www.arcforeigntrade.com/images/contact-banner.jpg" />

        {/* Mobil Uyumluluk */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      {/* Sol Bölüm (İletişim Bilgileri) */}
      <div className="md:w-1/3 bg-primary text-white p-8 relative">
        <div className="flex flex-col items-start gap-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
          <p className="mb-6">Bizimle iletişime 7/24 geçebilirsiniz!</p>
        </div>

        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="h-6 w-6 mr-2" />
            <a href="tel:+905316967868 " className="text-white">
              0531 696 78 68
            </a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="h-6 w-6 mr-2" />
            <a href="mailto:info@arcforeigntrade.com" className="text-white">
              info@arcforeigntrade.com
            </a>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <FaMapMarkerAlt className="h-6 w-6 mr-2" />
            <a
              href="https://www.google.com/maps?q=Ostim+OSB+Ostim+Prestij+İş+Merkezi,+2.Kat+No.19,+Yenimahalle+%2F+ANKARA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Ostim OSB Ostim Prestij İş Merkezi <br />
              2.Kat No.19 Yenimahalle / ANKARA
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 space-x-4 mt-16">
          <a
            href="https://www.linkedin.com/company/arc-foreign-trade"
            target="_blank"
            className="bg-white rounded-full p-2 group hover:bg-secondary transition-all"
          >
            <FaLinkedin className="h-6 w-6 text-primary group-hover:text-white transition-all" />
          </a>

          <a
            href="https://www.instagram.com/arcforeigntrade/"
            target="_blank"
            className="bg-white rounded-full p-2 group hover:bg-pink-500 transition-all"
          >
            <FaInstagram className="h-6 w-6 text-primary group-hover:text-white transition-all" />
          </a>
        </div>
      </div>

      {/* Sağ Bölüm (İletişim Formu) */}
      <div className="md:w-2/3 p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Adınız
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
                Soy isminiz
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="surname"
                type="text"
                placeholder="Soy isminiz"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-Posta
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="E-Posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Telefon Numarası
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="+90 012 3456 789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Konu Seçin</label>
            <div className="flex flex-col md:flex-row space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="topic"
                  value="general"
                  checked={topic === 'general'}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <span className="ml-2">Genel Konu</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="topic"
                  value="consulting"
                  checked={topic === 'consulting'}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <span className="ml-2">Danışmanlık</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="topic"
                  value="advertising"
                  checked={topic === 'advertising'}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <span className="ml-2">Reklam</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="topic"
                  value="marketing"
                  checked={topic === 'marketing'}
                  onChange={(e) => setTopic(e.target.value)}
                />
                <span className="ml-2">Pazarlama</span>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mesajınız
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Mesajınızı Buraya Yazın..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
