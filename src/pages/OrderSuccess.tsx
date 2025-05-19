import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, List } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  // In a real app, you'd get the order info from the location state or from API
  const orderInfo = {
    orderId: '1001',
    total: 312.37,
    email: 'john.doe@example.com'
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 mt-16">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold mb-3">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. We've received your purchase and will process it soon.
        </p>
        
        {/* Order Summary Card */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500">Order Number</p>
              <p className="font-medium">#{orderInfo.orderId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="font-medium">${orderInfo.total.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500">Confirmation sent to</p>
            <p className="font-medium">{orderInfo.email}</p>
          </div>
          
          <div className="flex items-center text-primary">
            <Package size={18} className="mr-2" />
            <span className="text-sm">A confirmation email has been sent with order details.</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/profile/orders" className="btn btn-primary py-3 flex items-center justify-center">
            <List size={18} className="mr-2" />
            View Order
          </Link>
          <Link to="/products" className="btn btn-outline py-3 flex items-center justify-center">
            Continue Shopping
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="mt-8 text-gray-500 text-sm">
          <p>
            Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;