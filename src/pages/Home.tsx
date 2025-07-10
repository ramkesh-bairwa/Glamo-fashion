import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import TredingProductCard from '../components/ui/TrendingProductCard';
import Login from './Login';

const Home: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true); // default: show login
  const [showLoginBox, setShowLoginBox] = useState(false); // show box after 3s

  const [featuredBrands, setFeaturedBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    // Delay login form 3 sec
    const timer = setTimeout(() => {
      setShowLoginBox(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Login check
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setShowLogin(false); // user is logged in
    }
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}/categories`);
        const result = await response.json();
        if (result.status && result.data.data) {
          setCategories(result.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch trending products
  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/affiliate-product/filter/latest`);
        const result = await response.json();
        if (result.status && result?.data) {
          setTrendingProducts(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch trending products:", error);
      }
    };
    fetchTrendingProducts();
  }, []);

  // Fetch brands
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${baseUrl}/brands`);
        const result = await response.json();
        if (result.status && Array.isArray(result.data)) {
          setFeaturedBrands(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch featured brands:', error);
      }
    };

    fetchBrands();
  }, []);

console.log(showLogin)
  if (showLogin) {
    return    <Login onLoginSuccess={() => setShowLogin(true)} />;

  }

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <section className="py-12 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left Side - Image */}
              <div className="w-full md:w-1/2">
                <img className=" h-[650px] object-cover" src="/images/design-1.png" alt="Design" />
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Discover the Best <span className="text-primary">Affiliate Products</span>
                </h1>
                <p className="text-lg text-white max-w-xl mb-8">
                  Explore our curated selection of high-quality products from trusted brands. 
                  We've done the research so you can shop with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link to="/products" className="btn btn-primary px-8 py-3">
                    Shop Now
                  </Link>
                  <Link to="/brands" className="btn btn-outline px-8 py-3">
                    Explore Brands
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        
              <section className="bg-white text-white py-16 px-6 md:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Explore Affiliate Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categories.length === 0 ? (
                    <p className="text-gray-500 col-span-full text-center">Loading categories...</p>
                  ) : (
                    categories.map((cat) => (
                      <div
                        key={cat.slug}
                        onClick={() => navigate(`/category/${cat.slug}`)}
                        className="relative rounded-2xl overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={cat.icon}
                          alt={cat.title}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 z-10">
                          <h3 className="text-xl text-white font-semibold">{cat.title}</h3>
                        </div>
                      </div>
                    ))
                  )}
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
                  {trendingProducts.length === 0 ? (
                    <p className="text-gray-500 text-center col-span-full">Loading trending products...</p>
                  ) : (
                    trendingProducts.map((product: any) => (
                      <TredingProductCard key={product.id} product={product} />
                    ))
                  )}
                 
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
            {featuredBrands.slice(0, 4).map((brand) => (
                <Link
                  key={brand.id}
                  to={`/brands/${brand.slug || brand.id}`}
                  className="bg-black rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
                >
                  <div className="w-20 h-20 mb-4 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                    {brand.icon && brand.icon.startsWith('data:image') ? (
                      <img src={brand.icon} alt={brand.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-500 text-sm">No Icon</span>
                    )}
                  </div>
                  <h1 className="text-lg text-white font-medium text-center mb-2">
                    {brand.title}
                  </h1>
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