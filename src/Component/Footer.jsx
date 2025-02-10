import logo from "../assets/swiggy.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300  bottom-0">
      <div className="px-32 py-10 flex justify-evenly gap-10 items-start">
        <div>
          <div className="flex items-center ">
            <img src={logo} className="w-[50px] mr-2 " />
            <span className="font-bold  text-orange-500 items-center text-3xl">
              Swiggy
            </span>
          </div>

          <div className="mx-4 my-2">
            <p>© 2025 Swiggy Limited</p>
          </div>
        </div>

        <div className="flex justify-between gap-20">
          <div className="font-semibold text-lg leading-10">
            Company
            <div className="font-light text-gray-700">
              <a href="#">About Us</a>
              <br />
              <a href="#">Swiggy Corporate</a>
              <br />
              <a href="#">Careers</a>
              <br />
              <a href="#">Team</a>
              <br />
              <a href="#">Swiggy One</a>
              <br />
              <a href="#">Swiggy Instamart</a>
              <br />
              <a href="#">Swiggy Dineout</a>
              <br />
              <a href="#">Swiggy Genie</a>
              <br />
              <a href="#">Minis</a>
              <br />
            </div>
          </div>
          <div className="flex-col flex-wrap content-between items-stretch">
            <div className="font-semibold text-lg leading-10">
              Contact Us
              <div className="font-light text-gray-500">
                <a href="#">Help & Support</a>
                <br />
                <a href="#">Partner with Us</a>
                <br />
                <a href="#">Rate with Us</a>
                <br />
              </div>
              <div className="font-semibold text-lg leading-10 py-20">
                Legal
                <div className="font-light text-gray-500">
                  <a href="#">Help & Support</a>
                  <br />
                  <a href="#">Partner with Us</a>
                  <br />
                  <a href="#">Rate with Us</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="font-semibold text-lg leading-10">
            Available in:
            <div className="font-light text-gray-500">
              <a href="#">Banglore</a>
              <br />
              <a href="#">Gurgaon</a>
              <br />
              <a href="#">Hyderabad</a>
              <br />
              <a href="#">Delhi</a>
              <br />
              <a href="#">Mumbai</a>
              <br />
              <a href="#">Pune</a>
              <br />
              <p className="bg-transparent border-2 border-gray-600 rounded-lg items-center flex justify-center  ">685 cities</p>
            </div>
          </div>
          <div className="font-semibold text-lg leading-10">
            Life at Swiggy
            <div className="font-light">
              <a href="#">Explore with Swiggy</a>
              <br />
              <a href="#">Swiggy News</a>
              <br />
              <a href="#">Snackables</a>
              <br />
            </div>
            <div className="font-semibold text-lg leading-10 py-20">
              Social Links:
              <div className="font-light flex justify-between text-gray-500">
                <a href="#" className="hover:text-gray-700">
                  <FaLinkedin />
                </a>
                <br />
                <a href="#" className="hover:text-gray-700">
                  <FaInstagram />
                </a>
                <br />
                <a href="#" className="hover:text-gray-700">
                  <FaFacebookF />
                </a>
                <br />
                <a href="#" className="hover:text-gray-700">
                  <FaPinterest />
                </a>
                <br />
                <a href="#" className="hover:text-gray-700">
                  <FaTwitter />
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20">
        <div className="min-w-fit h-0.5 bg-slate-900"></div>
      </div>

      <div className=" pt-10 pb-10 flex items- justify-center items-center gap-10">
        <div className="font-bold text-2xl">
          For better experience, download the Swiggy app now
        </div>
        <div className="flex justify-evenly gap-5">
          <a
            href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt="AppStore"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt="GooglePlay"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
