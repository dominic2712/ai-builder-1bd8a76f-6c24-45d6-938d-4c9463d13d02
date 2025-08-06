import React, { useState } from 'react';

const DeletePage: React.FC = () => {
  const [id, setId] = useState('');

  const handleDelete = () => {
    // Handle delete logic here
    console.log('Deleting:', id);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Delete Entry</h1>
      <div className="mt-4">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter ID to delete"
        />
        <button onClick={handleDelete} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default DeletePage;