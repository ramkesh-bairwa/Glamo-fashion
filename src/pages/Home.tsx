import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { getTrendingProducts } from '../data/products';
import { getFeaturedBrands } from '../data/brands';

const Home: React.FC = () => {
  const trendingProducts = getTrendingProducts(8);
  const featuredBrands = getFeaturedBrands();

  const categories = [
    {
      title: "Skin & Beauty",
      image: "/images/portrait-young-japanese-woman-with-jacket.jpg", // Add real image paths in /public/images
      href: "/category/beauty",
    },
    {
      title: "Fashion Picks",
      image: "/images/beauty-portrait-mystery-smiling-ginger-woman-with-long-hair-posing-sideways-looking.jpg",
      href: "/category/fashion",
    },
    {
      title: "Commercial Outfit",
      image: "/images/young-woman-with-shopping-bags-beautiful-dress.jpg",
      href: "/category/tech",
    },
    {
      title: "Wellness Essentials",
      image: "/images/calm-businesswoman-relaxing-with-breath-gymnastics.jpg",
      href: "/category/wellness",
    },
  ]

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

        
      <section className="bg-white text-white py-16 px-6 md:px-20 margin-top: 30px">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Affiliate Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                onClick={() => router.push(cat.href)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 z-10">
                  <h3 className="text-xl text-white font-semibold">{cat.title}</h3>
                </div>
              </div>
            ))}
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
                className="bg-black rounded-lg p-6 bg-black shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-lg text-white font-medium text-center mb-2">{brand.name}</h1>
                {/* <p className="text-white text-center line-clamp-2 text-sm">
                  {brand.description.split('.')[0]}
                </p> */}
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