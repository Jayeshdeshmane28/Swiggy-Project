import { faFaceAngry, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const RestaurentCard = ({img,name,rating,deliveryTime,cuision,location}) => {

  return (
    <div>
      <div className="w-[300px] md:max-w-[250px] h-[150px]">
        
        <img className="w-full h-full object-cover rounded-[15px] "
          src={img}
          alt=""
        />
      </div>
      <div className="px-2 ">
        <h2 className="font-semibold text-2xl">{name}</h2>
        <div className="flex gap-3">
          
          <h2 className="text-[16px] font-semibold"><FontAwesomeIcon className='text-yellow-400' icon={faStar}/>{rating}</h2>
          <h2 className="text-[16px] font-semibold ">{deliveryTime}</h2>
        </div>
      </div>

      <p className="text-gray-500 px-2 ">{cuision}</p>
      <p className="text-gray-500 px-2 ">{location}</p>
    </div>
  );
};

export default RestaurentCard;
