import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { getBrandById } from '../data/brands';
import { getProductsByBrand } from '../data/products';

const BrandDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const brand = getBrandById(id || '');
  const brandProducts = getProductsByBrand(id || '');

  if (!brand) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Brand Not Found</h2>
        <p className="mb-6">The brand you're looking for doesn't exist or has been removed.</p>
        <Link to="/brands" className="btn btn-primary">
          Browse Brands
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8 mt-16">
      <Link to="/brands" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft size={18} className="mr-1" />
        Back to brands
      </Link>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center p-4 flex-shrink-0">
          <img 
            src={brand.logo} 
            alt={brand.name} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">{brand.name}</h1>
          <p className="text-gray-700 mb-4">{brand.description}</p>
          <div className="bg-gray-100 px-4 py-2 rounded-md inline-block">
            <span className="font-medium">{brandProducts.length} products</span>
          </div>
        </div>
      </div>
      
      {brandProducts.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Products by {brand.name}</h2>
          <div className="product-grid">
            {brandProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-600">No products available for this brand yet.</p>
          <Link to="/products" className="mt-4 btn btn-outline">
            Browse All Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrandDetail;