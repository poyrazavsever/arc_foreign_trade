import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { FaSearch, FaList, FaTh } from 'react-icons/fa';

const CustomerProducts = () => {
  const allProducts = Array.from({ length: 20 }, (_, i) => ({
    category: `Kategori ${i + 1}`,
    title: `Ürün ${i + 1}`,
    imageSrc: '/Images/product.jpg',
    alt: `Ürün ${i + 1}`,
  }));

  const [searchQuery, setSearchQuery] = useState('');
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState('grid');

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">

        {/* Başlık */}
        <div className="text-left flex flex-col gap-2 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Müşterilerimizin Ürünleri
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Müşterilerimizin global pazarda yerini alan yenilikçi ve başarılı ürünlerini keşfedin.
          </p>
        </div>

        {/* Filtreleme ve Arama Alanı */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          
          {/* Arama Kutusu */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-64">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Ürün Ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none px-2 text-sm"
            />
          </div>

          {/* Ürün Sayısı Seçimi */}
          <select
            value={productsPerPage}
            onChange={(e) => setProductsPerPage(parseInt(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-auto text-sm outline-none"
          >
            <option value={4}>4 Ürün</option>
            <option value={8}>8 Ürün</option>
            <option value={12}>12 Ürün</option>
          </select>

          {/* Grid / List Görünüm Seçimi */}
          <div className="flex space-x-2">
            <button
              onClick={() => handleLayoutChange('grid')}
              className={`p-2 rounded-lg border ${layout === 'grid' ? 'bg-gray-200' : ''}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => handleLayoutChange('list')}
              className={`p-2 rounded-lg border ${layout === 'list' ? 'bg-gray-200' : ''}`}
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* Ürün Listesi */}
        <div className={`grid gap-6 ${layout === 'grid' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              category={product.category}
              title={product.title}
              imageSrc={product.imageSrc}
              alt={product.alt}
            />
          ))}
        </div>

        {/* Sayfalandırma */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 border rounded-lg text-sm disabled:opacity-50"
            >
              Önceki
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 mx-1 border rounded-lg text-sm ${currentPage === page ? 'bg-blue-600 text-white' : ''}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 border rounded-lg text-sm disabled:opacity-50"
            >
              Sonraki
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProducts;
