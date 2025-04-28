import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Truck, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

// Sample data for demonstration
const sampleOrder = {
  id: '1001',
  date: '2023-04-15T10:30:00Z',
  status: 'delivered',
  items: [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 199.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/3394665/pexels-photo-3394665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '6',
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/175702/pexels-photo-175702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  subtotal: 279.98,
  shipping: 9.99,
  tax: 22.40,
  total: 312.37,
  trackingNumber: 'TN7891234567',
  shippingAddress: {
    name: 'John Doe',
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'United States'
  },
  paymentMethod: 'Credit Card (ending in 4321)'
};

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you'd fetch the order data based on the ID
  const order = sampleOrder;
  
  if (!order) {
    return (
      <div className="container py-8 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Order Not Found</h2>
        <p className="mb-6">The order you're looking for doesn't exist or has been removed.</p>
        <Link to="/profile/orders" className="btn btn-primary">
          Back to Orders
        </Link>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'delivered':
        return <CheckCircle className="text-green-500" />;
      case 'cancelled':
        return <XCircle className="text-red-500" />;
      case 'shipped':
        return <Truck className="text-indigo-500" />;
      default:
        return <Package className="text-primary" />;
    }
  };

  return (
    <div className="container py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/profile/orders" className="inline-flex items-center text-primary hover:underline mb-6">
          <ArrowLeft size={18} className="mr-1" />
          Back to orders
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          {/* Order Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl font-bold">Order #{order.id}</h1>
                <p className="text-gray-500">
                  {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center mt-3 md:mt-0">
                {getStatusIcon(order.status)}
                <span className="ml-2 font-medium capitalize">{order.status}</span>
              </div>
            </div>
          </div>
          
          {/* Order Items */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-medium mb-4">Order Items</h2>
            <div className="divide-y divide-gray-100">
              {order.items.map(item => (
                <div key={item.id} className="py-4 flex">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>${order.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-medium">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Shipping & Payment Info */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-medium mb-3">Shipping Information</h2>
              <p className="text-gray-700">{order.shippingAddress.name}</p>
              <p className="text-gray-700">{order.shippingAddress.street}</p>
              <p className="text-gray-700">
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
              <p className="text-gray-700">{order.shippingAddress.country}</p>
              
              {order.trackingNumber && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Tracking Number:</p>
                  <div className="flex items-center mt-1">
                    <span className="font-medium">{order.trackingNumber}</span>
                    <a 
                      href="#" 
                      className="ml-3 text-primary text-sm flex items-center hover:underline"
                    >
                      Track Package <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-3">Payment Information</h2>
              <p className="text-gray-700">{order.paymentMethod}</p>
              <p className="text-gray-700 mt-1">Billing address same as shipping</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link to="/profile/orders" className="btn btn-outline text-center">
            Return to Orders
          </Link>
          <Link to="/contact" className="btn btn-primary text-center">
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;