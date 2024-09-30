import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md">
      <textarea 
        className="w-full p-2 border rounded-md" 
        rows="4" 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)} 
        placeholder="Your feedback..."
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded-md">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
