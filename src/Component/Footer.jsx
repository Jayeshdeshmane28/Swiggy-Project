import logo from "../assets/swiggy.png";
import { FaLinkedin, FaInstagram, FaFacebookF, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300 bottom-0 mt-12">
      {/* Main Footer Container */}
      <div className="px-8 md:px-16 lg:px-32 py-10 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Section: Logo & Copyright */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img src={logo} className="w-[50px] mr-2" alt="Swiggy Logo" />
            <span className="font-bold text-orange-500 text-3xl">Swiggy</span>
          </div>
          <p className="mt-2 text-gray-700">© 2025 Swiggy Limited</p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex flex-wrap justify-center md:justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="text-gray-700 space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Swiggy Corporate</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Swiggy One</a></li>
              <li><a href="#">Swiggy Instamart</a></li>
              <li><a href="#">Swiggy Dineout</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="text-gray-700 space-y-1">
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner with Us</a></li>
              <li><a href="#">Rate with Us</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">Available in:</h3>
            <ul className="text-gray-700 space-y-1">
              <li><a href="#">Bangalore</a></li>
              <li><a href="#">Gurgaon</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Delhi</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Pune</a></li>
            </ul>
            <p className="mt-2 text-gray-600 border border-gray-500 px-4 py-1 rounded-lg inline-block">
              685 cities
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg">Follow Us:</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-gray-600">
            <a href="#" className="hover:text-gray-800"><FaLinkedin size={22} /></a>
            <a href="#" className="hover:text-gray-800"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-gray-800"><FaFacebookF size={22} /></a>
            <a href="#" className="hover:text-gray-800"><FaPinterest size={22} /></a>
            <a href="#" className="hover:text-gray-800"><FaTwitter size={22} /></a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-0.5 bg-gray-400 mx-auto"></div>

      {/* App Download Section */}
      <div className="py-10 flex flex-col md:flex-row justify-center items-center gap-5 text-center md:text-left">
        <h2 className="font-bold text-xl md:text-2xl">For a better experience, download the Swiggy app now</h2>
        <div className="flex gap-5">
          <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920" target="_blank">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="AppStore" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="_blank">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="GooglePlay" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
