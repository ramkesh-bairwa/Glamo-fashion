import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, CreditCard, LogOut, Heart, ChevronRight, AlertCircle } from 'lucide-react';

// Sample user data for demonstration
const sampleUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'United States'
  }
};

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // In a real app, you'd fetch user data from an API or context
  const user = sampleUser;
  
  return (
    <div className="container py-8 mt-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <User className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                <button 
                  className={`w-full text-left px-4 py-3 flex items-center ${activeTab === 'profile' ? 'bg-gray-50 text-primary' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={18} className="mr-3" />
                  <span>Profile Information</span>
                </button>
                <Link 
                  to="/profile/orders" 
                  className="w-full text-left px-4 py-3 flex items-center text-gray-700 hover:bg-gray-50"
                >
                  <Package size={18} className="mr-3" />
                  <span>Orders</span>
                  <ChevronRight size={16} className="ml-auto" />
                </Link>
                <button 
                  className={`w-full text-left px-4 py-3 flex items-center ${activeTab === 'wishlist' ? 'bg-gray-50 text-primary' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('wishlist')}
                >
                  <Heart size={18} className="mr-3" />
                  <span>Saved Products</span>
                </button>
                <button 
                  className={`w-full text-left px-4 py-3 flex items-center ${activeTab === 'payment' ? 'bg-gray-50 text-primary' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('payment')}
                >
                  <CreditCard size={18} className="mr-3" />
                  <span>Payment Methods</span>
                </button>
                <Link
                  to="/login"
                  className="w-full text-left px-4 py-3 flex items-center text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} className="mr-3" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-200">
              <h3 className="font-medium flex items-center text-gray-700">
                <AlertCircle size={16} className="mr-2" />
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Contact our customer support team for assistance with your account.
              </p>
              <Link to="/contact" className="text-primary text-sm hover:underline block mt-2">
                Contact Support
              </Link>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        defaultValue={user.name}
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        defaultValue={user.email}
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      defaultValue={user.phone}
                      className="input"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Shipping Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="street" className="block text-gray-700 text-sm mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="street"
                          defaultValue={user.address.street}
                          className="input"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-gray-700 text-sm mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            defaultValue={user.address.city}
                            className="input"
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-gray-700 text-sm mb-1">
                            State/Province
                          </label>
                          <input
                            type="text"
                            id="state"
                            defaultValue={user.address.state}
                            className="input"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="zipCode" className="block text-gray-700 text-sm mb-1">
                            ZIP/Postal Code
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            defaultValue={user.address.zipCode}
                            className="input"
                          />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-gray-700 text-sm mb-1">
                            Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            defaultValue={user.address.country}
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary px-6">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Saved Products</h2>
                
                <div className="text-center py-8">
                  <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No saved products yet</h3>
                  <p className="text-gray-500 mb-4">
                    Browse our products and click the heart icon to save your favorites
                  </p>
                  <Link to="/products" className="btn btn-primary">
                    Browse Products
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
                
                <div className="text-center py-8">
                  <CreditCard size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No payment methods saved</h3>
                  <p className="text-gray-500 mb-4">
                    Add a payment method to make checkout faster
                  </p>
                  <button className="btn btn-primary">
                    Add Payment Method
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;