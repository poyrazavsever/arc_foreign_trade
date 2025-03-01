import React from 'react'

const TestimonialCard = ({ name, date, text, company, imageSrc }) => (
    
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg w-full">

      <div className="flex items-center justify-between w-full">

          <div className="flex items-center gap-3 mb-4">

            <img src={imageSrc} alt={name} className="rounded-full w-12 h-12" />

            <h3 className="font-semibold text-lg">{name}</h3>

          </div>

          <p className="text-gray-500 text-sm">{date}</p>

      </div>

      <p className="text-gray-600 text-left">{text}</p>

      <div className="mt-4 flex gap-2 flex-wrap">
        {company.map((c, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-full">{c}</span>
        ))}
      </div>

    </div>
  );

export default TestimonialCard
