import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row mt-36">
      {/* Sol Bölüm (İletişim Bilgileri) */}
      <div className="md:w-1/3 bg-primary text-white p-8 relative">

        <div className='flex flex-col items-start gap-4 mb-4'>
            <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
            <p className="mb-6">Bizimle iletişime 7/24 geçebilirsiniz!</p>
        </div>

        <div className='flex flex-col items-start gap-8'>

            <div className="flex items-center gap-4 mb-4">
                <FaPhoneAlt className="h-6 w-6 mr-2" />
                <span>+90 555 555 55 55</span>
            </div>

            <div className="flex items-center gap-4  mb-4">
                <FaEnvelope className="h-6 w-6 mr-2" />
                <span>support@arcforeigntrade.com</span>
            </div>
            
            <div className="flex items-start gap-4 mb-4">
                <FaMapMarkerAlt className="h-6 w-6 mr-2" />
                <span>
                    Ostim OSB Ostim Prestij İş Merkezi <br />
                    2.Kat No.19 Yenimahalle / ANKARA
                </span>
            </div>

        </div>

        <div className="flex items-center gap-4 space-x-4 mt-16">
          <div className="bg-white rounded-full p-2">
            <FaTwitter className="h-6 w-6 text-primary" />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaInstagram className="h-6 w-6 text-primary" />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaDiscord className="h-6 w-6 text-primary" />
          </div>
        </div>

      </div>

      {/* Sağ Bölüm (İletişim Formu) */}
      <div className="md:w-2/3 p-8">
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
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Konu Seçin</label>
          <div className="flex flex-col md:flex-row space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="topic" value="general" />
              <span className="ml-2">Genel Konu</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="topic" value="consulting" />
              <span className="ml-2">Danışmanlık</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="topic" value="advertising" />
              <span className="ml-2">Reklam</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" className="form-radio" name="topic" value="marketing" />
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
          ></textarea>
        </div>
        <div className="mt-6">
          <button className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;