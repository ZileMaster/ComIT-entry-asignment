import React from 'react';

const Card = ({ title, description, imgSrc, isSmall }) => {
  const heightClass = isSmall ? 'h-48' : 'h-64';

  return (
    <div className={`shadow-md rounded-lg overflow-hidden ${heightClass}`}>
      <img className="w-full object-cover object-center" src={imgSrc} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-medium mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;