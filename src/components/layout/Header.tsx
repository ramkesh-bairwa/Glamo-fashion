import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      style={{background:"black"}} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
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
          <Link to="/" className="text-gray-700 text-white hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 text-white hover:text-primary transition-colors">
            Products
          </Link>
          {/* <Link to="/brands" className="text-gray-700 hover:text-primary transition-colors">
            Brands
          </Link> */}
          <Link to="/about" className="text-gray-700 text-white hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 text-white hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <button 
            aria-label="Search"
            className="p-2 text-gray-700 hover:text-primary transition-colors"
          >
            <Search size={20} />
          </button> */}
          <Link 
            to="/login" 
            className="text-white p-2 text-gray-700 hover:text-primary transition-colors"
          >
            <User size={20} />
          </Link>
          {/* <Link 
            to="/cart" 
            className="p-2 text-gray-700 hover:text-primary transition-colors relative"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-primary text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link> */}
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
              <Link to="/" className="text-gray-700 hover:text-primary p-2 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-primary p-2 transition-colors">
                Products
              </Link>
              <Link to="/brands" className="text-gray-700 hover:text-primary p-2 transition-colors">
                Brands
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary p-2 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary p-2 transition-colors">
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
                {/* <button className="p-2 text-gray-700 hover:text-primary transition-colors">
                  <Search size={20} />
                </button> */}
                {/* <Link to="/profile" className="p-2 text-gray-700 hover:text-primary transition-colors">
                  <User size={20} />
                </Link> */}
                <Link to="/cart" className="p-2 text-gray-700 hover:text-primary transition-colors relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    0
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;