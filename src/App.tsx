import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import DeletePage from './pages/DeletePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-2">
            <Link to="/" className="text-xl font-semibold text-gray-800">AI Website</Link>
            <div className="flex space-x-4">
              <Link to="/create" className="text-gray-600 hover:text-gray-800">Create</Link>
              <Link to="/update" className="text-gray-600 hover:text-gray-800">Update</Link>
              <Link to="/delete" className="text-gray-600 hover:text-gray-800">Delete</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update" element={<UpdatePage />} />
            <Route path="/delete" element={<DeletePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;