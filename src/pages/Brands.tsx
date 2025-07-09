import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { brands } from '../data/brands'; // ❌ Remove this
import { getProductsByBrand } from '../data/products';

const Brands: React.FC = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch(`${baseUrl}/brands`);
        const result = await res.json();
        if (result.status && Array.isArray(result.data)) {
          setBrands(result.data);
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="container py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Our Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {brands.map((brand) => {
          const brandProducts = getProductsByBrand(brand.id); // Optional: keep or remove if not needed

          return (
            <Link
              key={brand.id}
              to={`/brands/${brand.slug || brand.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-40 h-40 bg-gray-100 flex items-center justify-center p-6">
                {brand.icon && brand.icon.startsWith('data:image') ? (
                  <img
                    src={brand.icon}
                    alt={brand.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">No Logo</span>
                )}
              </div>
              <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold mb-2">{brand.title}</h2>
                {brand.content && (
                  <p className="text-gray-600 mb-3 line-clamp-2">{brand.content}</p>
                )}
                <p className="text-sm text-gray-500">
                  {brandProducts.length} products
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
