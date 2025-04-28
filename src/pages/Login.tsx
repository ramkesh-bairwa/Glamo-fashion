import React, { useState } from 'react';

const Login: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
     <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
    {/* <!-- Feather Image Placeholder --> */}
    <div className="mb-6">
        <img  src="/images/glamo-login.jpg" alt="Feather" className=" mx-auto" />

    </div>

    {/* <!-- Heading --> */}
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Enter your mobile number</h2>
    
    {/* <!-- Input Fields --> */}
    <div className="flex items-center border rounded-md overflow-hidden mb-6">
      <span className="bg-gray-100 px-4 py-3 text-gray-700 text-sm">+91</span>
      <input 
        type="tel" 
        placeholder="Mobile number" 
        className="flex-1 px-4 py-3 focus:outline-none text-sm"
      />
    </div>

    <button className="w-full bg-[#fc7703] hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition">
      CONTINUE
    </button>
    <p className="text-gray-500 text-sm mb-6">By taping on Verify Phone Number, you agree to our Terms of Service  and  Privacy Policy.</p>

  </div>
   </div>
  );
};

export default Login;