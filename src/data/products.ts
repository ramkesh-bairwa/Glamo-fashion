import { ProductType } from '../types';

export const products: ProductType[] = [
  {
    id: '1',
    name: 'CLASSY WOMENS PRINTED COTTON CORD-SET',
    slug: 'classy-women-printed-cotton-set',
    description: 'Experience exceptional sound quality with these premium wireless headphones. Features active noise cancellation and 30-hour battery life.',
    price: 378,
    originalPrice: 599,
    discount: 221,
    image: '/uploads/products/1.jpg',
    images: [
      'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 3.8,
    reviews: 10373,
    brand: {
      id: '1',
      name: 'Meeso',
      logo: 'https://images.pexels.com/photos/2363530/pexels-photo-2363530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Leading audio technology brand known for premium sound quality.'
    },
    category: {
      id: '1',
      name: 'Audio',
      slug: 'audio'
    },
    affiliateUrl: 'https://www.meesho.com/af_invite/464254207:instagram_stories:172411?p_id=477457584&ext_id=7w9kmo&utm_source=instagram_stories',
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
    name: 'Chic Cocoa Brown Jumpsuit set for woman',
    slug: 'chic-cocoa-brown-jumpsuit',
    description: 'Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, sleep tracking, and 7-day battery life.',
    price: 149.99,
    originalPrice: 179.99,
    discount: 16,
    image: '/uploads/products/2.jpg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4482031/pexels-photo-4482031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.7,
    reviews: 189,
    brand: {
      id: '2',
      name: 'Meeso',
      logo: 'https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Innovative fitness technology for active lifestyles.'
    },
    category: {
      id: '2',
      name: 'Wearables',
      slug: 'wearables'
    },
    affiliateUrl: 'https://www.meesho.com/af_invite/464254207:instagram_stories:172433?p_id=481727896&ext_id=7yt3mg&utm_source=instagram_stories',
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
    name: 'KOREAN High Quality Denim Jeans',
    slug: 'korean-denim-jeans',
    description: 'Capture your adventures in stunning 4K resolution. Waterproof, shockproof, and built for extreme conditions.',
    price: 249.99,
    originalPrice: 299.99,
    discount: 16,
    image: '/uploads/products/3.jpg',
    images: [
      'https://images.pexels.com/photos/3712339/pexels-photo-3712339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10689736/pexels-photo-10689736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.6,
    reviews: 134,
    brand: {
      id: '3',
      name: 'Meeso',
      logo: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Professional-grade camera equipment for adventure seekers.'
    },
    category: {
      id: '3',
      name: 'Cameras',
      slug: 'cameras'
    },
    affiliateUrl: 'https://www.meesho.com/af_invite/464254207:instagram_stories:172468?p_id=516642384&ext_id=8jlftc&utm_source=instagram_stories',
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
    name: 'Shasmi Floral Round Neck, Puff Sleeves',
    slug: 'shasmi-floral0print-midi-derss',
    description: 'Capture breathtaking aerial footage with this professional-grade drone. Features 4K camera, 30-minute flight time, and obstacle avoidance.',
    price: 649,
    originalPrice: 2999,
    discount: 20,
    image: '/uploads/products/4.jpg',
    images: [
      'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1087181/pexels-photo-1087181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    rating: 4.9,
    reviews: 78,
    brand: {
      id: '4',
      name: 'Amazon',
      logo: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Pioneer in consumer and professional drone technology.'
    },
    category: {
      id: '4',
      name: 'Drones',
      slug: 'drones'
    },
    affiliateUrl: 'https://www.amazon.in/Shasmi-Floral-Print-Midi-Dress/dp/B0F5QD42W2?_encoding=UTF8&pd_rd_w=G7vhY&content-id=amzn1.sym.efa7b643-c4b1-42cf-9724-d202ada6627b&pf_rd_p=efa7b643-c4b1-42cf-9724-d202ada6627b&pf_rd_r=PQ4Z1AQTEYV9WVCPKRZM&pd_rd_wg=G0Bx0&pd_rd_r=8229c912-2113-4f62-83a3-1b2fd66af20a&th=1&psc=1&linkCode=ll1&tag=glamofashiond-21&linkId=b0b5ca9c90f71766c97e17b1a10762c4&language=en_IN&ref_=as_li_ss_tl',
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