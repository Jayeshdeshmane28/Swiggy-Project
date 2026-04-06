import React from 'react';
import logo from '../assets/swiggy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHome, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import useOnline from '../utils/useOnline';
import { useCart } from '../utils/CartContext';

const Header = () => {
  let OnlineStatus = useOnline();
  const { totalCount } = useCart();

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between px-8 py-5   shadow-lg items-center ">
        
        {/* Logo Section */}
        <Link className="cursor-pointer flex items-center space-x-3" to="/">
          <img src={logo} alt="logo" className="w-12" />
          <span className="text-2xl font-bold">Swiggy</span>
          <p className="text-sm font-semibold ps-3 py-4">
            {OnlineStatus ? "🟢 Online" : "🔴 Offline"}
          </p>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-gray-300 transition">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            <FontAwesomeIcon icon={faMessage} className="mr-2" />
            About Us 
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Contact Us
          </Link>
          <Link to="/cart" className="hover:text-gray-300 transition relative">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
            Cart
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
