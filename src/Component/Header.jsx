import React from 'react'
import logo from '../assets/swiggy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHome, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
   <div className='flex justify-between px-8 py-4 shadow-lg items-center '>
   <a className='cursor-pointer flex items-center ' href="">
    <img src={logo} alt="img" className='w-14' />
    <span className='text-2xl font-semibold text-orange-500'>Swiggy</span>
   
   </a>
    <div className='flex justify-between gap-6 items '>
        <a  href=""> <FontAwesomeIcon  icon={faHome}/>Home</a>
        {/* <a  href=""> <FaShoppingCart />Home</a> */}
        <a href=""> <FontAwesomeIcon icon={faMessage}/>About us</a>
        <a href=""><FontAwesomeIcon icon={faPhone}/>Contact Us</a>
        <a href=""><FontAwesomeIcon icon={faCartShopping}/>Cart</a>
    </div>
   </div>
  )
}

export default Header