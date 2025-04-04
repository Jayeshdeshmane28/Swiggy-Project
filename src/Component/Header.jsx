import React from 'react';
import logo from '../assets/swiggy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHome, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router'; // Fixed incorrect import
import useOnline from '../utils/useOnline';

const Header = () => {
  let OnlineStatus = useOnline();

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
          <Link to="/cart" className="hover:text-gray-300 transition">
            <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
