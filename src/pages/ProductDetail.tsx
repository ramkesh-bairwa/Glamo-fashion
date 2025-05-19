import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, X, ShoppingCart, ExternalLink, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const relatedProducts = getRelatedProducts(id || '', 4);
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container py-8 mt-16">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} className="mx-1" />
        <Link to="/products" className="hover:text-primary">Products</Link>
        <ChevronRight size={16} className="mx-1" />
        <Link to={`/categories/${product.category.slug}`} className="hover:text-primary">
          {product.category.name}
        </Link>
        <ChevronRight size={16} className="mx-1" />
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg overflow-hidden mb-4">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`border-2 rounded overflow-hidden w-20 h-20 flex-shrink-0 ${
                  activeImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <Link 
            to={`/brands/${product.brand.id}`}
            className="text-sm text-gray-500 hover:text-primary mb-2 inline-block"
          >
            {product.brand.name}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-primary">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  className={i < Math.floor(product.rating) ? "text-primary" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="ml-3 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-3 px-2 py-1 bg-primary text-xs font-bold text-gray-900 rounded">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          {/* Features */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="mr-4">Quantity:</span>
              <div className="flex border border-gray-300 rounded">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 border-r border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 flex items-center justify-center">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 border-l border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span className="ml-4 text-sm text-gray-500">
                {product.inStock ? (
                  <span className="text-green-600 flex items-center">
                    <Check size={16} className="mr-1" /> In Stock
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center">
                    <X size={16} className="mr-1" /> Out of Stock
                  </span>
                )}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn btn-primary py-3 flex-1 flex items-center justify-center"
                disabled={!product.inStock}
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <a 
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline py-3 flex-1 flex items-center justify-center"
              >
                <ExternalLink size={18} className="mr-2" />
                View on Retailer Site
              </a>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Tags: {product.tags.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="product-grid">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;