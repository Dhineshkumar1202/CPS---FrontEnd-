import React from 'react';

const DashboardLayout = ({ title, children }) => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
