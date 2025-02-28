import React from 'react';
import ProductCard from './ProductCard'; // ProductCard bileşeninin yolunu güncelleyin

const PopularProducts = () => {
  const products = [
    {
      category: 'Yedek Parça',
      title: 'Dişli Kutusu',
      imageSrc: '/Images/product.jpg',
      alt: 'Dişli Kutusu',
    },
    {
      category: 'Motor Parçası',
      title: 'Silindir Kapağı',
      imageSrc: '/Images/product.jpg',
      alt: 'Silindir Kapağı',
    },
    {
      category: 'Fren Sistemi',
      title: 'Fren Balatası',
      imageSrc: '/Images/product.jpg',
      alt: 'Fren Balatası',
    },
    {
      category: 'Süspansiyon',
      title: 'Amortisör',
      imageSrc: '/Images/product.jpg',
      alt: 'Amortisör',
    },
  ];

  return (
    <div className="bg-white py-48">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Popüler Ürünler</h2>
          <p className="text-gray-600">
            En çok tercih edilen ürünlerimizden bazıları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              category={product.category}
              title={product.title}
              imageSrc={product.imageSrc}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;