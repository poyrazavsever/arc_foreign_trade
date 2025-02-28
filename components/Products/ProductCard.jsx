import React from 'react';
import Image from 'next/image';

const ProductCard = ({ category, title, imageSrc, alt }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
      {/* Kategori Adı */}
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
        {category}
      </div>

      {/* Ürün Resmi */}
      <div className="relative h-64">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Ürün Adı */}
      <div className="p-6 bg-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;