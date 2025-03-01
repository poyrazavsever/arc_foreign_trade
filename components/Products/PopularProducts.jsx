import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  const products = [
    { id: 1, category: 'Yedek Parça', title: 'Dişli Kutusu', imageSrc: '/Images/product.jpg', alt: 'Dişli Kutusu' },
    { id: 2, category: 'Motor Parçası', title: 'Silindir Kapağı', imageSrc: '/Images/product.jpg', alt: 'Silindir Kapağı' },
    { id: 3, category: 'Fren Sistemi', title: 'Fren Balatası', imageSrc: '/Images/product.jpg', alt: 'Fren Balatası' },
    { id: 4, category: 'Süspansiyon', title: 'Amortisör', imageSrc: '/Images/product.jpg', alt: 'Amortisör' },
  ];

  return (
    <div className="bg-white py-48">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Popüler Ürünler</h2>
          <p className="text-gray-600">En çok tercih edilen ürünlerimizden bazıları.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
