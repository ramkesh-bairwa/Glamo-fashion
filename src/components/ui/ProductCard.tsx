import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { ProductType } from '../../types';

interface ProductCardProps {
  product: ProductType;
  showAffiliate?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showAffiliate = true }) => {

  const {
    id,
    title,
    image,
    brand_name,
    category_name,
    price,
    shortDesc,
    rating = 0,
    reviews = 0,
    discount = 0,
    affiliateUrl
  } = product;

  return (
    <div className="card group border rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition">
      {/* Product Image */}
      <Link to={`/products/${id}`} className="block relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-primary px-2 py-1 text-xs font-bold text-white rounded">
            {discount}% OFF
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center brand-name text-sm mb-1 text-gray-500">
          {brand_name}
        </div>

        <Link to={`/products/${id}`} className="block">
          <h3 className="font-medium text-gray-900 mb-1 hover:text-primary transition-colors break-words whitespace-normal">
            {title}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-bold text-gray-900">₹ {price.toFixed(2)}</span>
          </div>
          

          <div className="flex space-x-2">

            {showAffiliate && affiliateUrl && (
             <a 
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
                Retailer Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
