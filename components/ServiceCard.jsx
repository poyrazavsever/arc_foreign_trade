import React from 'react'
import Image from 'next/image';

const ServiceCard = ({imageSrc, alt, title, description}) => {
  return (
    <div className="border border-neutral-200 rounded-lg p-6 transform transition-transform cursor-pointer hover:scale-105 hover:shadow-lg">

      <div className="mb-4">

            <Image
                  src={imageSrc} // Resim yolunu dinamik alıyoruz
                  alt={alt} // Alternatif metni dinamik alıyoruz
                  className="w-full"
                  width={200}
                  height={150}
                  objectFit="contain"
                />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {title} {/* Hizmet başlığını dinamik alıyoruz */}
        </h3>

        <p className="text-gray-600">
            {description} {/* Açıklamayı dinamik alıyoruz */}
        </p>

    </div>
  )
}

export default ServiceCard
