import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { ProductType } from '../../types';

interface ProductCardProps {
  product: ProductType;
  showAffiliate?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showAffiliate = true }) => {
  return (
    <div className="card group">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-primary px-2 py-1 text-xs font-bold text-gray-900 rounded">
            {product.discount}% OFF
          </div>
        )}
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center text-sm mb-1">
          <Link to={`/brands/${product.brand.id}`} className="text-gray-500 hover:text-primary">
            {product.brand.name}
          </Link>
        </div>
        
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-gray-900 mb-1 truncate hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-primary">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                className={i < Math.floor(product.rating) ? "text-primary" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button 
              className="p-2 text-gray-700 hover:text-primary border border-gray-200 rounded-full transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
            
            {showAffiliate && (
              <a 
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary text-gray-900 hover:bg-primary-dark rounded-full transition-colors"
                aria-label="View on retailer site"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;