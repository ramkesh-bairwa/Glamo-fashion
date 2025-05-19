import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../data/brands';
import { getProductsByBrand } from '../data/products';

const Brands: React.FC = () => {
  return (
    <div className="container py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Our Brands</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {brands.map(brand => {
          const brandProducts = getProductsByBrand(brand.id);
          
          return (
            <Link 
              key={brand.id}
              to={`/brands/${brand.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-40 h-40 bg-gray-100 flex items-center justify-center p-6">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
                <p className="text-gray-600 mb-3 line-clamp-2">{brand.description}</p>
                <p className="text-sm text-gray-500">{brandProducts.length} products</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;