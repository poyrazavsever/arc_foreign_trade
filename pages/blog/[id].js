import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState('');

  const blogs = [
    {
      id: 1,
      title: 'Global Pazara Açılmak: İlk Adımlar ve Stratejiler',
      author: 'Buğrahan Arıcı',
      date: '10/03/2025',
      content: '../../contents/1.md',
      imageUrl: '/ContentImage/1.jpg',
      authorImage: '/Team/bugrahan.jpeg',
      time: '4 Dakikalık Okuma',
      category: 'Pazarlama',
      isPopular: true,
    },
  ];

  const blog = blogs.find((b) => b.id === Number(id));
  

  useEffect(() => {
    if (id) {
      const filePath = `/contents/${id}.md`; // Adjust path as needed
      fetch(filePath)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error('Markdown dosyası yüklenirken hata oluştu:', err));
    }
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Resim ve blog başlığı */}
      {blog && (
        <>
          <div className="relative mb-6">
            <img
              src={`${blog.imageUrl}`}
              alt={blog.title}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className='w-full h-full absolute top-0 left-0 bg-black opacity-70'/>
            <div className="absolute bottom-4 left-4 text-neutral-50">
              <h1 className="text-4xl font-bold">{blog.title}</h1>
            </div>
          </div>

          {/* Blog meta bilgileri */}
          <div className="flex w-full items-center justify-between space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <img
                src={`${blog.authorImage}`}
                alt={blog.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold">{blog.author}</p>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </div>
            </div>
            <div className="text-md text-gray-500">{blog.time}</div>
          </div>

          {/* Blog içeriği */}
          <div className="bg-white rounded-lg py-12">
            <article className="text-gray-900">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-4xl font-bold text-gray-800 mb-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-3xl font-semibold text-gray-700 mb-3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-2xl font-medium text-gray-600 mb-2" {...props} />
                  ),
                  h4: ({ node, ...props }) => (
                    <h3 className="text-xl font-medium text-gray-600 mb-2" {...props} />
                  ),
                  h5: ({ node, ...props }) => (
                    <h3 className="text-lg font-medium text-gray-600 mb-2" {...props} />
                  ),
                  h6: ({ node, ...props }) => (
                    <h3 className="text-base font-medium text-gray-600 mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-lg leading-relaxed text-gray-800 mb-4" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-5 mb-4" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-5 mb-4" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="mb-2" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 pl-4 italic text-gray-600 mb-4" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-blue-600 hover:underline" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
