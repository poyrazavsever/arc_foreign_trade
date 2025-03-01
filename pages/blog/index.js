import React, { useState } from 'react';
import BlogCard from '@/components/Blog/BlogCard';

const Blog = () => {

  const blogs = [
    {
      id: 1,
      title: 'En son yenilikler hakkında',
      author: 'Mehmet Yılmaz',
      date: '2025-03-01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: true,
    },
    {
      id: 2,
      title: 'Teknoloji dünyasında yeni trendler',
      author: 'Ali Kaan',
      date: '2025-02-25',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: false,
    },
    {
      id: 3,
      title: 'Yazılımda en iyi pratikler',
      author: 'Zeynep Çelik',
      date: '2025-01-15',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: true,
    },
    {
      id: 4,
      title: 'Yapay zeka gelişmeleri',
      author: 'Ömer Faruk',
      date: '2025-02-10',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: false,
    },
    {
      id: 5,
      title: 'Yeni nesil yapay zeka teknolojileri',
      author: 'Fatma Aksoy',
      date: '2025-03-02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: false,
    },
    {
      id: 6,
      title: 'Yazılım geliştirmede dikkat edilmesi gerekenler',
      author: 'Mehmet Yılmaz',
      date: '2025-02-22',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: true,
    },
    {
      id: 7,
      title: 'Veritabanı yönetimi ve en iyi uygulamalar',
      author: 'Zeynep Çelik',
      date: '2025-01-20',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: false,
    },
    {
      id: 8,
      title: 'Front-end gelişmeleri',
      author: 'Ali Kaan',
      date: '2025-02-18',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/Images/herosection.jpg',
      authorImage: '/Images/herosection.jpg',
      time: '5 Dakikalık Okuma',
      category: 'Teknoloji',
      isPopular: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Popüler postları filtrele
  const popularPosts = blogs.filter((post) => post.isPopular);

  // Sayfalama işlemi
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full container mx-auto my-24 px-4">

      {/* En Son Yüklenen Post */}
      <div className="w-full h-96 relative mb-8">
        <img
          src={blogs[0]?.imageUrl}
          alt="Blog"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{blogs[0]?.title}</h2>
          <p className="text-lg">{blogs[0]?.author}</p>
          <p className="text-sm">{blogs[0]?.date}</p>
        </div>
      </div>

      {/* Popüler Postlar */}
      <div className="mb-24">
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Popüler Blog Yazılarımız</h2>
          <p className="text-gray-600">Öne Çıkan Blog Yazılarımız</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularPosts.map((post) => (
            <BlogCard
              key={post.id}
              time={post.time}
              date={post.date}
              title={post.title}
              author={post.author}
              authorDate={post.date}
              imageUrl={post.imageUrl}
              authorImage={post.authorImage}
              category={post.category}
            />
          ))}
        </div>
      </div>

      {/* Tüm Blog Postları ve Pagination */}
      <div>
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Bütün Blog Yazılarımız</h2>
          <p className="text-gray-600">Blog yazılarımızı okuyun, keşfedin.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {currentPosts.map((post) => (
            <BlogCard
              key={post.id}
              time={post.time}
              date={post.date}
              title={post.title}
              author={post.author}
              authorDate={post.date}
              imageUrl={post.imageUrl}
              category={post.category}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
          >
            Önceki
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastPost >= blogs.length}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
          >
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
