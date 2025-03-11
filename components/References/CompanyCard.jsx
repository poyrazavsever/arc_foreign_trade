import React from "react";

const CompanyCard = ({ logoSrc, alt, title, description, servicesTitle, servicesDescription }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 my-12 bg-white">
      {/* Sol taraf - Fotoğraf */}
      <div className="w-full md:w-1/3 p-4 flex justify-center items-center rounded-t-xl md:rounded-l-xl md:rounded-t-none">
        <img src={logoSrc} alt={alt} className="w-full h-auto object-contain max-h-40 md:max-h-60" />
      </div>

      {/* Sağ taraf - Başlıklar ve Metinler */}
      <div className="w-full md:w-2/3 p-4 sm:p-6">
        {/* Başlık 1 */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

        {/* Başlık 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{servicesTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{servicesDescription}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
