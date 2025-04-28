import { ProductType } from '../types';

export const products: ProductType[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    description: 'Experience exceptional sound quality with these premium wireless headphones. Features active noise cancellation and 30-hour battery life.',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviews: 256,
    brand: {
      id: '1',
      name: 'SoundMaster',
      logo: 'https://images.pexels.com/photos/2363530/pexels-photo-2363530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Leading audio technology brand known for premium sound quality.'
    },
    category: {
      id: '1',
      name: 'Audio',
      slug: 'audio'
    },
    affiliateUrl: 'https://example.com/affiliate/headphones',
    features: [
      'Active Noise Cancellation',
      '30-hour Battery Life',
      'Bluetooth 5.2',
      'Built-in Microphone',
      'Touch Controls'
    ],
    inStock: true,
    tags: ['headphones', 'wireless', 'audio', 'bluetooth'],
    createdAt: '2023-09-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    description: 'Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, sleep tracking, and 7-day battery life.',
    price: 149.99,
    originalPrice: 179.99,
    discount: 16,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4482031/pexels-photo-4482031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 189,
    brand: {
      id: '2',
      name: 'TechFit',
      logo: 'https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Innovative fitness technology for active lifestyles.'
    },
    category: {
      id: '2',
      name: 'Wearables',
      slug: 'wearables'
    },
    affiliateUrl: 'https://example.com/affiliate/smartwatch',
    features: [
      'Heart Rate Monitoring',
      'Sleep Tracking',
      'Water Resistant (50m)',
      '7-day Battery Life',
      'GPS Tracking'
    ],
    inStock: true,
    tags: ['smartwatch', 'fitness', 'wearable', 'health'],
    createdAt: '2023-10-05T14:45:00Z'
  },
  {
    id: '3',
    name: 'Ultra HD 4K Action Camera',
    slug: 'ultra-hd-4k-action-camera',
    description: 'Capture your adventures in stunning 4K resolution. Waterproof, shockproof, and built for extreme conditions.',
    price: 249.99,
    originalPrice: 299.99,
    discount: 16,
    image: 'https://images.pexels.com/photos/3712339/pexels-photo-3712339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/3712339/pexels-photo-3712339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10689736/pexels-photo-10689736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.6,
    reviews: 134,
    brand: {
      id: '3',
      name: 'ActionPro',
      logo: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Professional-grade camera equipment for adventure seekers.'
    },
    category: {
      id: '3',
      name: 'Cameras',
      slug: 'cameras'
    },
    affiliateUrl: 'https://example.com/affiliate/action-camera',
    features: [
      '4K/60fps Video Recording',
      'Waterproof (30m)',
      'Electronic Image Stabilization',
      'Voice Control',
      'Wi-Fi & Bluetooth Connectivity'
    ],
    inStock: true,
    tags: ['camera', '4K', 'action camera', 'waterproof'],
    createdAt: '2023-08-20T09:15:00Z'
  },
  {
    id: '4',
    name: 'Professional Drone with 4K Camera',
    slug: 'professional-drone-with-4k-camera',
    description: 'Capture breathtaking aerial footage with this professional-grade drone. Features 4K camera, 30-minute flight time, and obstacle avoidance.',
    price: 799.99,
    originalPrice: 999.99,
    discount: 20,
    image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1087181/pexels-photo-1087181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviews: 78,
    brand: {
      id: '4',
      name: 'SkyView',
      logo: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Pioneer in consumer and professional drone technology.'
    },
    category: {
      id: '4',
      name: 'Drones',
      slug: 'drones'
    },
    affiliateUrl: 'https://example.com/affiliate/drone',
    features: [
      '4K/60fps Camera',
      '30-minute Flight Time',
      'Obstacle Avoidance System',
      '7km Range',
      'Foldable Design'
    ],
    inStock: true,
    tags: ['drone', 'aerial', '4K', 'photography'],
    createdAt: '2023-11-10T11:00:00Z'
  },
  {
    id: '5',
    name: 'Smart Home Security System',
    slug: 'smart-home-security-system',
    description: 'Complete home security solution with HD cameras, motion sensors, and 24/7 monitoring. Control everything from your smartphone.',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4219888/pexels-photo-4219888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6170981/pexels-photo-6170981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 112,
    brand: {
      id: '5',
      name: 'SecureHome',
      logo: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Cutting-edge security solutions for residential and commercial properties.'
    },
    category: {
      id: '5',
      name: 'Smart Home',
      slug: 'smart-home'
    },
    affiliateUrl: 'https://example.com/affiliate/home-security',
    features: [
      'HD Security Cameras',
      'Motion & Door Sensors',
      'Mobile App Control',
      'Night Vision',
      'Cloud Storage'
    ],
    inStock: true,
    tags: ['security', 'smart home', 'cameras', 'sensors'],
    createdAt: '2023-09-25T16:20:00Z'
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    slug: 'portable-bluetooth-speaker',
    description: 'Powerful sound in a compact, waterproof design. Perfect for outdoor adventures with 12-hour battery life.',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image: 'https://images.pexels.com/photos/175702/pexels-photo-175702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/175702/pexels-photo-175702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8232800/pexels-photo-8232800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.5,
    reviews: 203,
    brand: {
      id: '1',
      name: 'SoundMaster',
      logo: 'https://images.pexels.com/photos/2363530/pexels-photo-2363530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Leading audio technology brand known for premium sound quality.'
    },
    category: {
      id: '1',
      name: 'Audio',
      slug: 'audio'
    },
    affiliateUrl: 'https://example.com/affiliate/bluetooth-speaker',
    features: [
      'Waterproof (IPX7)',
      '12-hour Battery Life',
      'Bluetooth 5.0',
      'Built-in Microphone',
      'Compact Design'
    ],
    inStock: true,
    tags: ['speaker', 'bluetooth', 'portable', 'waterproof'],
    createdAt: '2023-10-18T13:10:00Z'
  },
  {
    id: '7',
    name: 'Ultra-Thin Laptop',
    slug: 'ultra-thin-laptop',
    description: 'Powerful performance in an ultra-thin design. Features 11th Gen Intel Core processor, 16GB RAM, and 512GB SSD.',
    price: 1199.99,
    originalPrice: 1399.99,
    discount: 14,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.8,
    reviews: 97,
    brand: {
      id: '6',
      name: 'TechPro',
      logo: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Innovative technology solutions for professionals and creatives.'
    },
    category: {
      id: '6',
      name: 'Computers',
      slug: 'computers'
    },
    affiliateUrl: 'https://example.com/affiliate/laptop',
    features: [
      '11th Gen Intel Core i7',
      '16GB RAM',
      '512GB SSD',
      '14" 4K Display',
      'Fingerprint Reader'
    ],
    inStock: true,
    tags: ['laptop', 'ultrabook', 'thin', 'lightweight'],
    createdAt: '2023-11-05T10:45:00Z'
  },
  {
    id: '8',
    name: 'Smart LED TV 55"',
    slug: 'smart-led-tv-55-inch',
    description: 'Immersive viewing experience with 4K resolution, HDR, and smart features. Stream your favorite content easily.',
    price: 549.99,
    originalPrice: 649.99,
    discount: 15,
    image: 'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4009388/pexels-photo-4009388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.6,
    reviews: 164,
    brand: {
      id: '7',
      name: 'VisionPlus',
      logo: 'https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Premium display technology for home entertainment.'
    },
    category: {
      id: '7',
      name: 'TVs',
      slug: 'tvs'
    },
    affiliateUrl: 'https://example.com/affiliate/smart-tv',
    features: [
      '55" 4K UHD Display',
      'HDR10+ Support',
      'Smart TV Platform',
      'Voice Control',
      'Dolby Audio'
    ],
    inStock: true,
    tags: ['tv', 'smart tv', '4K', 'LED'],
    createdAt: '2023-09-30T15:30:00Z'
  }
];

export const getProductById = (id: string): ProductType | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, limit = 4): ProductType[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && (p.category.id === product.category.id || p.brand.id === product.brand.id))
    .slice(0, limit);
};

export const getProductsByCategory = (categoryId: string): ProductType[] => {
  return products.filter(product => product.category.id === categoryId);
};

export const getProductsByBrand = (brandId: string): ProductType[] => {
  return products.filter(product => product.brand.id === brandId);
};

export const getTrendingProducts = (limit = 4): ProductType[] => {
  return [...products]
    .sort((a, b) => b.reviews - a.reviews || b.rating - a.rating)
    .slice(0, limit);
};