import Head from 'next/head';
import React, { useState } from 'react';
import BlogCard from '@/components/Blog/BlogCard';
import { blogs } from '@/blogs';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Blogları ID'ye göre azalan sırayla sıralama (yeniler öne çıkar)
  const sortedBlogs = [...blogs].sort((a, b) => b.id - a.id);

  // Popüler postları filtrele (önceden sıralanmış diziden)
  const popularPosts = sortedBlogs.filter((post) => post.isPopular);

  // Sayfalama işlemi
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);


  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>

      <Head>
        {/* 📌 Genel SEO Meta Etiketleri */}
        <title>Blog - ARC Foreign Trade - Yazılarımızı, yöntemlerimizi keşfet!</title>
        <meta
          name="description"
          content="ARC Foreign Trade blogunda ticaret, teknoloji ve iş dünyası üzerine yenilikçi makalelere ulaşın. Küresel ticaretin geleceği hakkında daha fazla bilgi edinin."
        />
        <meta
          name="keywords"
          content="Blog, ARC Foreign Trade, ticaret blogu, teknoloji makaleleri, iş dünyası, ticaret trendleri, iş stratejileri, küresel ticaret"
        />
        <meta name="author" content="ARC Foreign Trade" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.arcforeigntrade.com/blog" />

        {/* 📌 Open Graph Meta Etiketleri (Facebook & LinkedIn) */}
        <meta property="og:title" content="Blog - ARC Foreign Trade" />
        <meta
          property="og:description"
          content="ARC Foreign Trade'in iş dünyası ve ticaretle ilgili güncel blog yazılarını keşfedin. Küresel ticaretin geleceği ve inovasyon hakkında ilham verici içerikler."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arcforeigntrade.com/blog" />
        <meta property="og:image" content="https://www.arcforeigntrade.com/assets/blog-cover.jpg" />
        <meta property="og:site_name" content="ARC Foreign Trade" />

        {/* 📌 Twitter Card Meta Etiketleri */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - ARC Foreign Trade" />
        <meta
          name="twitter:description"
          content="ARC Foreign Trade blogunda ticaret, teknoloji, iş dünyası ve küresel ticaret üzerine ilginç makalelere göz atın."
        />
        <meta name="twitter:image" content="https://www.arcforeigntrade.com/assets/blog-cover.jpg" />
        <meta name="twitter:site" content="@arcforeigntrade" />

        {/* 📌 Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
    
    <main>
      <div className="w-full container mx-auto my-24 px-4">

    {/* En Son Yüklenen Post */}
    <div className="w-full h-96 relative mb-8">
    <img
      src={(popularPosts.length > 0 ? popularPosts[0] : sortedBlogs[0])?.imageUrl}
      alt="Blog"
      className="w-full h-full object-cover rounded-lg"
    />

    <div className="absolute inset-0 bg-black opacity-70"></div>

    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        {(popularPosts.length > 0 ? popularPosts[0] : sortedBlogs[0])?.title}
      </h2>
      <p className="text-lg">{(popularPosts.length > 0 ? popularPosts[0] : sortedBlogs[0])?.author}</p>
      <p className="text-sm">{(popularPosts.length > 0 ? popularPosts[0] : sortedBlogs[0])?.date}</p>
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
          id = {post.id}
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
          id = {post.id}
          time={post.time}
          date={post.date}
          title={post.title}
          author={post.author}
          authorDate={post.date}
          authorImage={post.authorImage}
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
    </main>

    </>
  );
};

export default Blog;
