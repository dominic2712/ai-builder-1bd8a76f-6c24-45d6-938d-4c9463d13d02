import React, { useState } from 'react';

const CreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle create logic here
    console.log('Creating:', { title, content });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Create New Entry</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Create</button>
      </form>
    </div>
  );
};

export default CreatePage;