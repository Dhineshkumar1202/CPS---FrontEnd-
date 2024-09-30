import React from 'react';

const Card = ({ title, content, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
      <div className="mt-4">{footer}</div>
    </div>
  );
};

export default Card;
