import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 mt-16">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary py-2 px-6 flex items-center justify-center">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <Link to="/products" className="btn btn-outline py-2 px-6 flex items-center justify-center">
            <Search size={18} className="mr-2" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;