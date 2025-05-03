import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
            <span className="text-primary text-white text-4xl">Glamo </span>
            <span className='text-white text-4xl'>Fashion</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted destination for the best affiliate products at competitive prices. 
              We carefully curate quality products from top brands.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-400 hover:text-primary transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/profile/orders" className="text-gray-400 hover:text-primary transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Commerce Street, Business District, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@affilistore.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@affilistore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} AffiliStore. All Rights Reserved.</p>
          <p className="mt-2">
            This website contains affiliate links. If you purchase through these links, 
            we may earn a commission at no additional cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;