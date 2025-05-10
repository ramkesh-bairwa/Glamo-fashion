import React, { useState } from 'react';

const Login: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border-2 border-black flex flex-col justify-between">
    
    {/* Top Image */}
    <div>
      <img 
        src="/images/logins1.jpg" 
        alt="Feather" 
        className="mx-auto mb-4 h-[474px] object-contain" 
      />
    </div>

    {/* Center Input */}
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Enter your mobile number</h2>
      <div className="flex items-center border rounded-md overflow-hidden mb-6 mt-4">
        <span className="bg-gray-100 px-4 py-3 text-gray-700 text-sm">+91</span>
        <input 
          type="tel" 
          placeholder="Mobile number" 
          className="flex-1 px-4 py-3 focus:outline-none text-sm"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={10}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
          }}
/>
      </div>
      <button className="w-full bg-[#fc7703] hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition">
        CONTINUE
      </button>
    </div>

    {/* Bottom Text */}
    <p className="text-gray-500 text-sm text-center">
      By taping on Verify Phone Number, you agree to our Terms of Service and Privacy Policy.
    </p>
  </div>
</div>

  );
};

export default Login;