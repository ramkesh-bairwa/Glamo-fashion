import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, X, ShoppingCart, ExternalLink, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';
import TredingProductCard from '../components/ui/TrendingProductCard';

interface ProductType {
  id: string;
  title: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  shortDesc: string;
  longDesc: string;
  affiliateUrl: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  originalPrice: number;
  discount: number;
  description: string;
  features: string[];
  inStock: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  brand_name: string;
  category_name: string;
}

const ProductDetail: React.FC = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`${baseUrl}/affiliate-product/${id}`);
      const json = await res.json();
      // const products=Object.keys(json.data.items).length
      // console.log(json.status)
      if (json.status) {
        const singleProduct = json.data.items;
        setProduct(singleProduct);

        // ✅ Fetch related products after product is loaded
        // fetchRelatedProducts(singleProduct);
      } else {
        console.error("Product not found in response:", json);
      }
    } catch (err) {
      console.error('Failed to fetch product:', err);
    } finally {
     setTimeout(() => {
      setLoading(false);
    }, 3000);
    }
  };

  // const fetchRelatedProducts = async (currentProduct: ProductType) => {
  //   try {
  //     const res = await fetch(`${baseUrl}/affiliate-product`);
  //     const json = await res.json();
  //     const allProducts: ProductType[] = json.data?.items || [];

  //     // const filtered = allProducts.filter(
  //     //   (item) =>
  //     //     item.id !== currentProduct.id &&
  //     //     (item.category === currentProduct.category ||
  //     //      item.brand === currentProduct.brand)
  //     // );

  //     setRelatedProducts(json.data.item);
  //   } catch (err) {
  //     console.error('Failed to fetch related products:', err);
  //   }
  // };

  if (id) {
    fetchProduct(); // ✅ Only this needed
  }
}, [id]);


useEffect(() => {
  

  const fetchRelatedProducts = async () => {
    try {
      const res = await fetch(`${baseUrl}/affiliate-product/filter/latest`);
      const json = await res.json();
      setRelatedProducts(json.data);
    } catch (err) {
      console.error('Failed to fetch related products:', err);
    }
  };
fetchRelatedProducts()
  // if (id) {
  //   fetchProduct(); // ✅ Only this needed
  // }
}, []);



  // const incrementQuantity = () => setQuantity((prev) => prev + 1);
  // const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
   return (
  <div className="flex items-center justify-center py-20">
     <img src="/images/page-loader.gif" alt="Loading..." className="w-full h-auto" style={{ height: '400px' }} />
  </div>
);
  }

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

  return (
    <div className="container py-8 mt-16">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-gray-500">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} className="mx-1" />
        <Link to="/products" className="hover:text-primary">Products</Link>
        <ChevronRight size={16} className="mx-1" />
        <span className="text-gray-700">{product.title}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Images */}
        <div>
          {/* Product Images */}
<div>
  <div className="bg-white rounded-lg overflow-hidden mb-4">
    {product.image.length > 0 ? (
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-96 object-contain"
      />
    ) : (
      <div className="w-full h-96 flex items-center justify-center text-gray-400">
        No Image Available
      </div>
    )}
  </div>

  {/* Thumbnail Images */}
  <div className="flex gap-2 overflow-x-auto pb-2">
    {Array.isArray(product.images) &&
      product.images.map((image, index) => (
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

        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>

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
           <span className="text-2xl font-bold text-gray-900">
            ₹{Number(product.price).toFixed(2)}
          </span>
            {product.originalPrice > product.price && (
              <>
                <span className="ml-3 text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-3 px-2 py-1 bg-primary text-xs font-bold text-white rounded">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {Array.isArray(product.features) && product.features.length > 0 && (
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
            )}

          <div className="mb-6">
            <div className="flex items-center mb-4">
              {/* <span className="mr-4">Quantity:</span> */}
              {/* <div className="flex border border-gray-300 rounded">
                <button onClick={decrementQuantity} className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100">-</button>
                <span className="px-4 py-1">{quantity}</span>
                <button onClick={incrementQuantity} className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100">+</button>
              </div> */}
              {/* <span className="ml-4 text-sm text-gray-500">
                {product.inStock ? (
                  <span className="text-green-600 flex items-center">
                    <Check size={16} className="mr-1" /> In Stock
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center">
                    <X size={16} className="mr-1" /> Out of Stock
                  </span>
                )}
              </span> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="btn btn-primary py-3 flex-1 flex items-center justify-center" disabled={!product.inStock}>
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button> */}
              <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline py-3 flex-1 flex items-center justify-center">
                <ExternalLink size={18} className="mr-2" />
                View on Retailer Site
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>Tags: {Array.isArray(product.tags) ? product.tags.join(', ') : 'No tags available'}</p>
            <p><strong>Brand:</strong> {product.brand_name || product.brand}</p>
            <p><strong>Category:</strong> {product.category_name || product.category}</p>

            {product.shortDesc && (
                  <div className="mb-4">
                    <h3 className="font-medium mb-1">Summary</h3>
                    <p className="text-gray-700">{product.shortDesc}</p>
                  </div>
                )}

                {/* Full Description */}
                {product.longDesc && (
                  <div className="mb-4">
                    <h3 className="font-medium mb-1">Description</h3>
                    <p className="text-gray-700 whitespace-pre-line">{product.longDesc}</p>
                  </div>
                )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="product-grid">
           {relatedProducts.length === 0 ? (
                    <p className="text-gray-500 text-center col-span-full">Loading trending products...</p>
                  ) : (
                    relatedProducts.map((product: any) => (
                      <TredingProductCard key={product.id} product={product} />
                    ))
           )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
