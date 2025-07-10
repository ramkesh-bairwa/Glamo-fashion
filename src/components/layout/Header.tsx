import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close mobile menu when navigating
  }, [location]);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  }, [location]); // update when location changes

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'bg-black shadow-md py-2' : 'bg-black py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-gray-800 flex items-center">
          <span className="text-primary text-white">Glamo </span>
          <span className='text-white'>Fashion</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="text-white hover:text-primary transition-colors">Products</Link>
          <Link to="/about" className="text-white hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-white hover:text-primary transition-colors">Contact</Link>
          {!isLoggedIn ? (
            <Link to="/login" className="text-white hover:text-primary transition-colors">Login</Link>
          ) : (
            <button onClick={handleLogout} className="text-white hover:text-primary transition-colors">
              Logout
            </button>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn && (
            <Link to="/profile" className="text-white p-2 hover:text-primary transition-colors">
              <User size={20} />
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary p-2">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-primary p-2">Products</Link>
              <Link to="/brands" className="text-gray-700 hover:text-primary p-2">Brands</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary p-2">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary p-2">Contact</Link>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-left text-gray-700 hover:text-primary p-2"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-primary p-2">Login</Link>
              )}
              {isLoggedIn && (
                <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
                  <Link to="/profile" className="p-2 text-gray-700 hover:text-primary">
                    <User size={20} />
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
