import { faFaceAngry, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMAGE_URL } from "../Contants/Config";

const RestaurentCard = ({
  name,
  avgRating,
  sla,
  cuisines,
  locality,
  cloudinaryImageId,
}) => {
  const formatCuisines = (cuisines) => {
    if (!cuisines || cuisines.length === 0) return "Not available";
    return cuisines.length > 3
      ? cuisines.slice(0, 3).join(", ") + "..."
      : cuisines.join(", ");
  };

  const formatName=(name)=>{
    // if(!name || name.length === 0 ) return "not available";
    // return name.length > 3
    // ? name.slice(0,3).join(", ")+ "..."
    // :name.join(", ")

    if (!name) return "";
    const words = name.split(" ");
    return words.length > 3 ? words.slice(0, 3).join(" ") + "..." : name;
  }

  return (
    <div>
      <div className="w-[300px] md:max-w-[250px] h-[150px]">
        <img
          className="w-full h-full object-cover rounded-[15px] "
          src={IMAGE_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="px-2 ">
        <h2 className="font-semibold text-2xl">{formatName(name)}</h2>
        <div className="flex gap-3">
          <h2 className="text-[16px] font-semibold">
            <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            {avgRating}
          </h2>
          <h2 className="text-[16px] font-semibold ">
            {sla?.deliveryTime} min
          </h2>
        </div>
      </div>

      <p className="text-gray-500 px-2 ">{formatCuisines(cuisines)}</p>
      <p className="text-gray-500 px-2 ">{locality}</p>
    </div>
  );
};

export default RestaurentCard;
