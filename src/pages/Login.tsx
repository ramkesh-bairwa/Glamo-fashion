import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLoginSuccess?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [verfyOTPFlag, setVerfyOTPFlag] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginBox(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async () => {
    setError('');
    if (mobile.length !== 10) {
      setError('Please enter a valid 10-digit number');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile }),
      });

      const result = await response.json();
      if (result.status) {
        const otpMsg = result.otp ? `OTP sent successfully: ${result.otp}` : result.message || 'OTP sent';
        setSuccessMessage(otpMsg);
        setVerfyOTPFlag(true);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setError('');
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile_no: mobile, otp }),
      });

      const result = await response.json();
      if (result.status && result.auth_token) {
        localStorage.setItem('auth_token', result.auth_token);
        localStorage.setItem('userId', result.userId);
        setSuccessMessage(result.message || 'OTP verified successfully');
        setTimeout(() => {
          setSuccessMessage('');
          onLoginSuccess?.();
          navigate('/');
        }, 1500);
      } else {
        setError(result.message || 'Invalid OTP');
      }
    } catch (err) {
      console.error('OTP verify error:', err);
      setError('Failed to verify OTP. Try again.');
    } finally {
      setLoading(false);
    }
  };

  // 📦 Login screen UI
  if (!verfyOTPFlag) {
    return (
      <div className="relative w-full h-screen bg-[url('/images/logins1.jpg')] bg-cover bg-center">
        {!showLoginBox && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center">
            <h2 className="text-white text-xl font-semibold">Welcome...</h2>
          </div>
        )}

        {showLoginBox && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border-2 border-black">
              <img
                src="/images/logins1.jpg"
                alt="Feather"
                className="mx-auto mb-4 h-[300px] object-contain"
              />

              {/* ✅ Success Message */}
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-sm mb-4 text-center">
                  {successMessage}
                </div>
              )}

              <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                Enter your mobile number
              </h2>

              <div className="flex items-center border rounded-md overflow-hidden mb-4 mt-4">
                <span className="bg-gray-100 px-4 py-3 text-gray-700 text-sm">+91</span>
                <input
                  type="tel"
                  placeholder="Mobile number"
                  className="flex-1 px-4 py-3 focus:outline-none text-sm"
                  inputMode="numeric"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))
                  }
                />
              </div>

              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

              <button
                className="w-full bg-[#fc7703] hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'CONTINUE'}
              </button>

              <p className="text-gray-500 text-sm text-center mt-6">
                By tapping on Verify Phone Number, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 🔐 OTP screen
  return (
    <div className="relative w-full h-screen bg-[url('/images/logins1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border-2 border-black">
          <img
            src="/images/logins1.jpg"
            alt="Feather"
            className="mx-auto mb-4 h-[300px] object-contain"
          />

          {/* ✅ Success Message */}
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-sm mb-4 text-center">
              {successMessage}
            </div>
          )}

          <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Enter your OTP
          </h2>

          <div className="border rounded-md overflow-hidden mb-4 mt-4">
            <input
              type="tel"
              placeholder="Enter 6 digit OTP"
              className="w-full px-4 py-3 focus:outline-none text-sm"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) => setOTP(e.target.value.replace(/\D/g, '').slice(0, 6))}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            className="w-full bg-[#fc7703] hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
            onClick={verifyOtp}
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'VERIFY OTP'}
          </button>

          <p className="text-gray-500 text-sm text-center mt-6">
            By entering the OTP, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
