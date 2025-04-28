import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { getTrendingProducts } from '../data/products';
import { getFeaturedBrands } from '../data/brands';

const Home: React.FC = () => {
  const trendingProducts = getTrendingProducts(8);
  const featuredBrands = getFeaturedBrands();

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <section style={{background:"black"}} className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-white">
              Discover the Best <span className="text-primary">Affiliate Products</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-8 text-white">
              Explore our curated selection of high-quality products from trusted brands. 
              We've done the research so you can shop with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="btn btn-primary px-8 py-3"
              >
                Shop Now
              </Link>
              <Link 
                to="/brands" 
                className="btn btn-outline px-8 py-3"
              >
                Explore Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trending Products
            </h2>
            <Link 
              to="/products" 
              className="flex items-center text-primary hover:underline font-medium"
            >
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="product-grid">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Selection</h3>
              <p className="text-gray-600">
                We carefully review and select only the best products to ensure quality and value.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Honest Reviews</h3>
              <p className="text-gray-600">
                Our product recommendations are based on real testing and user feedback.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="text-gray-600">
                We continuously search for the best prices and exclusive deals for our visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Brands
            </h2>
            <Link 
              to="/brands" 
              className="flex items-center text-primary hover:underline font-medium"
            >
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBrands.map(brand => (
              <Link 
                key={brand.id} 
                to={`/brands/${brand.id}`}
                className="bg-white rounded-lg p-6 bg-black shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-center mb-2">{brand.name}</h3>
                <p className="text-white text-center line-clamp-2 text-sm">
                  {brand.description.split('.')[0]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with the Latest Products & Deals
            </h2> */}
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special promotions.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary flex-grow text-white"
                required
              />
              <button 
                type="submit"
                className="btn btn-primary px-6 py-3"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;