import React, { useState } from 'react';
import ProductCard from './ProductCard'; // ProductCard bileşeninin yolunu güncelleyin
import { FaSearch, FaFilter, FaList, FaTh } from 'react-icons/fa';

const CustomerProducts = () => {
  const allProducts = Array.from({ length: 20 }, (_, i) => ({
    category: `Kategori ${i + 1}`,
    title: `Ürün ${i + 1}`,
    imageSrc: '/Images/product.jpg',
    alt: `Ürün ${i + 1}`,
  }));

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'

  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === '' || product.category.toLowerCase().includes(filter.toLowerCase()))
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
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">

        <div className="text-left flex flex-col items-start gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Müşterilerimizin Ürünleri</h2>
            <p className="text-gray-600">
                Müşterilerimizin global pazarda yerini alan yenilikçi ve başarılı ürünlerini keşfedin. İş ortaklarımızın başarısına katkı sağlıyoruz!
            </p>
        </div>

        <div className="flex justify-start items-center gap-12 mb-8">
          {/* Arama Çubuğu */}
          <div className="flex items-center border border-gray-400 rounded-lg px-4 py-2">
            <FaSearch className="mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Ürün Ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none"
            />
          </div>

          {/* Ürün Sayısı Seçimi */}
          <select
            value={productsPerPage}
            onChange={(e) => setProductsPerPage(parseInt(e.target.value))}
            className="border rounded-lg px-4 py-2 outline-none text-gray-600"
          >
            <option value={4}>4 Ürün</option>
            <option value={8}>8 Ürün</option>
            <option value={12}>12 Ürün</option>
          </select>

          {/* Layout Seçimi */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleLayoutChange('grid')}
              className={`p-2 rounded-lg ${layout === 'grid' ? 'bg-gray-200' : ''}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => handleLayoutChange('list')}
              className={`p-2 rounded-lg ${layout === 'list' ? 'bg-gray-200' : ''}`}
            >
              <FaList />
            </button>
          </div>
        </div>

        {/* Ürün Listesi */}
        <div className={`grid ${layout === 'grid' ? 'grid-cols-1 md:grid-cols-4' : 'grid-cols-1'} gap-8`}>
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
            >
              Önceki
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 mx-1 border rounded-lg ${currentPage === page ? 'bg-blue-600 text-white' : ''}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 border rounded-lg disabled:opacity-50"
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