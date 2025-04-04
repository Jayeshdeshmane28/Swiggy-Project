import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMAGE_URL } from "../Contants/Config";
import { Link } from "react-router";

const RestaurentCard = ({ id, name, avgRating, sla, cuisines, locality, cloudinaryImageId }) => {
  // Format cuisines list
  const formatCuisines = (cuisines) => {
    if (!cuisines || cuisines.length === 0) return "Not available";
    return cuisines.length > 3 ? cuisines.slice(0, 3).join(", ") + "..." : cuisines.join(", ");
  };

  // Format restaurant name
  const formatName = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    return words.length > 9 ? words.slice(0, 3).join(" ") + "..." : name;
  };

  return (
    <Link to={`/menu/${name}/${id}`} className="block m-3"> {/* Added margin for spacing */}
      {/* Image Section */}
      <div className="w-full h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden rounded-xl shadow-md">
        <img 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          src={IMAGE_URL + cloudinaryImageId} 
          alt={name} 
        />
      </div>

      {/* Restaurant Details */}
      <div className="mt-2 px-2">
        <h2 className="font-semibold text-2xl truncate">{formatName(name)}</h2>
        <div className="flex items-center gap-2 text-xs mt-1">
          <h2 className="text-green-700 font-semibold text-[16px]">
            <FontAwesomeIcon icon={faStar} /> {avgRating}
          </h2>
          <span className="text-gray-600 text-[16px]">{sla?.deliveryTime} min</span>
        </div>
        <p className="text-gray-600 ">{formatCuisines(cuisines)}</p>
        <p className="text-gray-500 ">{locality}</p>
      </div>
    </Link>
  );
};

export default RestaurentCard;
