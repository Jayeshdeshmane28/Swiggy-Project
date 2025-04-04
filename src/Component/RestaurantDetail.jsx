import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantDetail = () => {
  return (
    <div className="font-semibold border border-gray-300 rounded-2xl p-5 shadow-xl bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.15)] mb-5">
      {/* Rating and Price */}
      <div className="flex gap-4 items-center">
        <p>
          <FontAwesomeIcon className="text-green-700" icon={faStar} aria-label="Rating" /> 
          4.3 (16k+ ratings)
        </p>
        <span className="text-gray-400">•</span>
        <p>₹300 for two</p>
      </div>

      {/* Category */}
      <p className="text-orange-600 underline">Pizza</p>

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
            Outlet: <span className="mx-3 text-gray-400 font-normal">Bandra Kurla Complex</span>
          </p>
          <p>Delivery Time: 30-35 mins</p>
        </div>
      </div>
    </div>
  );

};

export default RestaurantDetail;
