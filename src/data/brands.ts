import { BrandType } from '../types';

export const brands: BrandType[] = [
  {
    id: '1',
    name: 'SoundMaster',
    logo: 'https://images.pexels.com/photos/2363530/pexels-photo-2363530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Leading audio technology brand known for premium sound quality. SoundMaster produces industry-leading headphones, speakers, and audio accessories for music enthusiasts and professionals alike.'
  },
  {
    id: '2',
    name: 'TechFit',
    logo: 'https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Innovative fitness technology for active lifestyles. TechFit creates wearable devices that help users track their fitness goals, monitor health metrics, and improve overall wellness.'
  },
  {
    id: '3',
    name: 'ActionPro',
    logo: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Professional-grade camera equipment for adventure seekers. ActionPro designs rugged cameras that capture stunning footage in extreme conditions, perfect for outdoor enthusiasts and content creators.'
  },
  {
    id: '4',
    name: 'SkyView',
    logo: 'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Pioneer in consumer and professional drone technology. SkyView produces drones with advanced features for aerial photography, filmmaking, and recreational flying.'
  },
  {
    id: '5',
    name: 'SecureHome',
    logo: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Cutting-edge security solutions for residential and commercial properties. SecureHome offers comprehensive security systems with cameras, sensors, and smart monitoring capabilities.'
  },
  {
    id: '6',
    name: 'TechPro',
    logo: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Innovative technology solutions for professionals and creatives. TechPro manufactures high-performance laptops, desktops, and accessories designed for productivity and creativity.'
  },
  {
    id: '7',
    name: 'VisionPlus',
    logo: 'https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Premium display technology for home entertainment. VisionPlus creates stunning televisions and displays with superior picture quality, smart features, and elegant design.'
  },
  {
    id: '8',
    name: 'HomeConnect',
    logo: 'https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Smart home solutions for modern living. HomeConnect develops intuitive devices that transform ordinary homes into connected, efficient, and comfortable spaces.'
  }
];

export const getBrandById = (id: string): BrandType | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getFeaturedBrands = (limit = 4): BrandType[] => {
  return brands.slice(0, limit);
};