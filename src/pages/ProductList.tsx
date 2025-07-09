import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import { ProductType } from '../types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/affiliate-product`);
        const result = await response.json();

        if (result.status && result.data) {
          const mapped = result.data.items.map((item: any) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            category_name: item.category_name,
            brand_name: item.brand_name,
            price: parseFloat(item.price),
            shortDesc: item.shortDesc,
            longDesc: item.longDesc,
            affiliateUrl: item.affiliateUrl,
            image: item.image,
            status: item.status,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            reviews: 0,
            rating: 0,
          }));
          setProducts(mapped);
          setDisplayProducts(mapped);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const uniqueBrands = Array.from(new Set(products.map(p => p.brand_name)));
  const uniqueCategories = Array.from(new Set(products.map(p => p.category_name)));

  // Filter and sort logic
  useEffect(() => {
    let filtered = [...products];

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand_name));
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category_name));
    }

    filtered = filtered.filter(
      p => p.price >= priceRange.min && p.price <= priceRange.max
    );

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    setDisplayProducts(filtered);
  }, [products, selectedBrands, selectedCategories, priceRange, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 2000 });
  };

  return (
    <div className="container py-8 mt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden flex items-center text-gray-600 gap-1"
            onClick={() => setFilterOpen(true)}
          >
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 hidden md:inline">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg">Filters</h3>
              {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
                <button className="text-sm text-primary hover:underline" onClick={clearAllFilters}>
                  Clear all
                </button>
              )}
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="mb-2 flex justify-between text-sm">
                <span>₹ {priceRange.min}</span>
                <span>₹ {priceRange.max}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Brands</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {uniqueBrands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {uniqueCategories.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {displayProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found matching your filters.</p>
              <button onClick={clearAllFilters} className="mt-4 btn btn-outline">
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-500 mb-6">Showing {displayProducts.length} products</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {filterOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-900/50 flex">
          <div className="bg-white w-4/5 max-w-xs h-full overflow-y-auto p-6 ml-auto animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-lg flex items-center">
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
              </h3>
              <button onClick={() => setFilterOpen(false)} className="p-1 text-gray-500">
                <X size={20} />
              </button>
            </div>

            {/* Mobile Filters */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="mb-2 flex justify-between text-sm">
                <span>${priceRange.min}</span>
                <span>${priceRange.max}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Brands</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {uniqueBrands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {uniqueCategories.map((category) => (
                  <label key={category} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={clearAllFilters} className="btn btn-outline flex-1">
                Clear All
              </button>
              <button onClick={() => setFilterOpen(false)} className="btn btn-primary flex-1">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
