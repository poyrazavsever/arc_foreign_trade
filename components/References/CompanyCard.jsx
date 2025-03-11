import React from "react";

const CompanyCard = ({ logoSrc, alt, title, description, servicesTitle, servicesDescription }) => {
  return (
    <div className="flex items-center gap-8 shadow-sm rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 my-16">
      {/* Sol taraf - Fotoğraf */}
      <div className="w-1/3 p-4 flex justify-center items-center rounded-l-xl">
        <img src={logoSrc} alt={alt} className="w-full h-auto object-contain" />
      </div>

      {/* Sağ taraf - Başlıklar ve Metinler */}
      <div className="w-2/3 p-6">
        {/* Başlık 1 */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

        {/* Başlık 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{servicesTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{servicesDescription}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
