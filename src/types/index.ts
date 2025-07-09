export interface BrandType {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface CategoryType {
  id: string;
  name: string;
  slug: string;
}

export interface ProductType {
  id: string;
  title: string;
  slug?: string;
  image: string;
  brand_name: string;
  category_name: string;
  price: number;
  shortDesc?: string;
  longDesc?: string;
  affiliateUrl?: string;
  rating?: number;
  reviews?: number;
  discount?: number;
}


export interface UserType {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: AddressType;
}

export interface AddressType {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface OrderType {
  id: string;
  products: OrderProductType[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
  shippingAddress: AddressType;
}

export interface OrderProductType {
  product: ProductType;
  quantity: number;
  price: number;
}