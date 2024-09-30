import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition-all duration-300 w-full sm:w-auto"
    >
      {text}
    </button>
  );
};

export default Button;
