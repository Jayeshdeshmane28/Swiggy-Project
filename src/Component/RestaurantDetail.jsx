import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantDetail = ({rating,ratingNumber,costOfTwo,cuisines,areaName,deliveryTime}) => {
  console.log("areaName",areaName)
  return (
    // <div className="font-semibold border border-gray-300 rounded-2xl p-5 shadow-xl bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.15)] mb-5">
    <div className="p-5 font-semibold border border-t-0 rounded-[36px] bg-[linear-gradient(rgb(255,255,255)_-6.71%,rgb(235,235,242)_56.19%,rgb(223,223,231)_106.56%)]">
        <div className="p-5 border rounded-3xl bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.15)]">   
          
      {/* Rating and Price */}
      <div className="flex gap-4 items-center">
        <p> 
          <FontAwesomeIcon className="text-green-700" icon={faStar} aria-label="Rating" /> 
          {rating} ({ratingNumber})
        </p>
        <span className="text-gray-400">•</span>
        <p>{costOfTwo}</p>
      </div>

      {/* Category */}
      <p className="text-orange-600 underline">{cuisines?.join(', ')}</p>

      {/* Outlet Info */}
      <div className="flex gap-3">
        {/* Vertical Dotted Line */}
        <div className="flex pt-2 flex-col items-center">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-[1px] h-[23px] bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>

        {/* Outlet Details */}
        <div className="flex flex-col gap-1"> 
          <p>
            Outlet: <span className="mx-3 text-gray-400 font-normal">{areaName}</span>
          </p>
          <p>Delivery Time: {deliveryTime}</p>
        </div>
      </div>
    </div>
    </div> 
  );

};

export default RestaurantDetail;
