import React from 'react';

const BlogCard = ({
  id,
  time,
  date,
  title,
  author,
  authorImage,
  authorDate,
  imageUrl,
  category,
}) => {
  return (
    <a href={`blog/${id}`} className=' max-w-sm rounded-lg overflow-hidden shadow-xl bg-whitehover hover:scale-105 group hover:shadow-2xl transition-all'>

        {/* Header section with background color */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 relative">
          <div className="text-xl font-semibold">{time}</div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-gray-800 line-clamp-1">{title}</div>
          <div className="text-gray-600 text-lg mb-2">{date}</div>

          {/* Blog Image */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />

          {/* Category Badge */}
          <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
            {category}
          </div>

          {/* Author Section */}
          <div className="flex items-center mt-4">
            <img
              src={authorImage}
              alt={author}
              className="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4 object-cover"
            />
            <div className="text-sm">
              <p className="text-gray-900 font-semibold">{author}</p>
              <p className="text-gray-600">{authorDate}</p>
            </div>
          </div>
        </div>
    </a>
  );
};

export default BlogCard;
