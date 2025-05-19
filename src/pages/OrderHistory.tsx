import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ExternalLink, ChevronRight, Search } from 'lucide-react';

// Sample data for demonstration
const sampleOrders = [
  {
    id: '1001',
    date: '2023-04-15',
    status: 'delivered',
    items: 3,
    total: 249.97,
    trackingNumber: 'TN7891234567'
  },
  {
    id: '1002',
    date: '2023-03-22',
    status: 'delivered',
    items: 1,
    total: 149.99,
    trackingNumber: 'TN4567890123'
  },
  {
    id: '1003',
    date: '2023-02-10',
    status: 'delivered',
    items: 2,
    total: 329.98,
    trackingNumber: 'TN1234567890'
  },
  {
    id: '1004',
    date: '2023-01-05',
    status: 'cancelled',
    items: 1,
    total: 79.99,
    trackingNumber: null
  }
];

const OrderHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredOrders = sampleOrders.filter(
    order => 
      order.id.includes(searchTerm) || 
      order.trackingNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-indigo-100 text-indigo-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container py-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Order History</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by order ID or tracking number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Orders List */}
          {filteredOrders.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredOrders.map(order => (
                <Link 
                  key={order.id}
                  to={`/profile/orders/${order.id}`}
                  className="block p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">Order #{order.id}</p>
                      <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                      <div className="flex items-center mt-1">
                        <Package size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{order.items} item{order.items !== 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </div>
                      <p className="font-medium mt-1">${order.total.toFixed(2)}</p>
                      {order.trackingNumber && (
                        <a 
                          href="#" 
                          className="text-xs text-primary flex items-center justify-end mt-1 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Track Package <ExternalLink size={12} className="ml-1" />
                        </a>
                      )}
                    </div>
                    
                    <ChevronRight size={20} className="text-gray-400 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Package size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No orders found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm 
                  ? `No orders match "${searchTerm}"`
                  : "You haven't placed any orders yet"}
              </p>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="font-medium mb-3">Need Help With an Order?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about your orders, our customer support team is here to help.
          </p>
          <Link to="/contact" className="btn btn-outline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;