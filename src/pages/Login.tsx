import React, { useEffect, useState } from 'react';

const Login: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (showWelcome) {
      const countdown = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setShowWelcome(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [showWelcome]);

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
      <div className="mb-6">
          <img 
            src="/images/welcome.jpg" 
            alt="Welcome"
          />
          </div>
              <h2 className="text-2xl  font-semibold text-gray-800 mb-2 text-white">Welcome to Glamo Fashion Dairies</h2>

              {/* <div className="flex items-center justify-center gap-3 border rounded-md overflow-hidden mb-6 px-4 "> */}
        {/* Spinner */}
        <div className="w-4 h-4 border-2 border-[#fc7703] border-t-transparent rounded-full animate-spin"></div>

        {/* Countdown Text */}
        <span className="text-sm text-gray-700 font-medium">
          {secondsLeft} second{secondsLeft !== 1 && 's'} wait...
        </span>
      {/* </div> */}

            </div>
          </div>
    )
  }else{

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <div className="mb-6">
          <img src="/images/glamo-login.jpg" alt="Feather" className="mx-auto" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Enter your mobile number</h2>

        <div className="flex items-center border rounded-md overflow-hidden mb-6">
          <span className="bg-gray-100 px-4 py-3 text-gray-700 text-sm">+91</span>
          <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              placeholder="Mobile number"
              className="flex-1 px-4 py-3 focus:outline-none text-sm"
              onKeyDown={(e) => {
                const allowedKeys = [
                  'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'
                ];
                if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
                  e.preventDefault();
                }
              }}
            />
        </div>

        <button className="w-full bg-[#fc7703] hover:bg-[#e56700] text-white font-semibold py-3 rounded-md transition">
          CONTINUE
        </button>

        <p className="text-gray-500 text-sm mt-4">
          By tapping on Verify Phone Number, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
};

export default Login;
