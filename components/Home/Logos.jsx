import React from 'react';
import Image from 'next/image';

const Logos = () => {
  const logoPaths = [
    '/Logos/1.png',
    '/Logos/2.png',
    '/Logos/3.png',
    '/Logos/4.png',
    '/Logos/5.png',
    '/Logos/6.png',
    '/Logos/7.png',
    '/Logos/8.png',
  ];

  return (
    <div className="overflow-hidden py-8 md:py-24">
      <div className="flex animate-scroll">
        {/* İlk grup logolar */}
        {logoPaths.map((path, index) => (
          <div key={index} className="h-20 w-auto flex items-center mr-8">
            <Image
              src={path}
              alt={`Logo ${index + 1}`}
              width={150}
              height={80}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
