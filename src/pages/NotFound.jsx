import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500">Go Back Home</a>
    </div>
  );
};

export default NotFound;
