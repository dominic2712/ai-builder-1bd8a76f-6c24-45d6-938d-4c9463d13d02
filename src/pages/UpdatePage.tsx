import React, { useState } from 'react';

const UpdatePage: React.FC = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle update logic here
    console.log('Updating:', { id, title, content });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Update Entry</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
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
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Update</button>
      </form>
    </div>
  );
};

export default UpdatePage;