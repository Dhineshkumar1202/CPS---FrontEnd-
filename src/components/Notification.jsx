import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-md">
      {message}
    </div>
  );
};

export default Notification;
