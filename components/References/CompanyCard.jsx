import React from 'react';

const CompanyCard = ({ logoSrc, alt, title, description, servicesTitle, servicesDescription }) => {
  return (
    <div className="flex items-center gap-8 overflow-hidden">
      {/* Sol taraf - Fotoğraf */}
      <div className="w-1/3">
        <img
          src={logoSrc}
          alt={alt}
          className="w-full h-full "
        />
      </div>

      {/* Sağ taraf - Başlıklar ve Metinler */}
      <div className="w-2/3 p-8">
        {/* Başlık 1 */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>

        {/* Başlık 2 */}
        <h2 className="text-xl font-semibold mb-4">{servicesTitle}</h2>
        <p className="text-gray-700">{servicesDescription}</p>
      </div>
    </div>
  );
};

export default CompanyCard;