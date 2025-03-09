import React from "react";
import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URl } from "../Contants/Config";
import ShimmerCard from "./ShimmerCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

const Cardcontainer = () => {

  const [searchText, setSearchText] = useState("");

  const restaurantData=useRestaurant()
  const{errorMessage,RestaurantList,masterList,updateRestaurants}=restaurantData
  console.log("restaurnatlist from custom hook",restaurantData);
  

  // handle rating
  const handleRating = () => {
    const FilterData = RestaurantList.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.5;
    });

    setRestaurantList(FilterData);

    // console.log(FilterData);
  };


  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }


  return (
    <>
      <button
        className="bg-gray-300 p-2 rounded-lg shadow-md hover:bg-gray-400"
        onClick={handleRating}
      >
        Top Rated Restaurants
      </button>

      <div className="w-11/12 mx-auto py-4">
  
      <SearchBar masterCollection={masterList} updater={updateRestaurants} text={searchText} updateText={setSearchText}/>
        

        <div className="flex gap-4 px-4 py-4 flex-wrap ">
          {RestaurantList.length === 0 ?(masterList.length ===0 ? (
            <ShimmerCard />
          ) :
          (
            <h1>there are no restaurant <span className="text-red-400">"{searchText}</span></h1>
          )):
          
          (
            RestaurantList.map((restaurant) => (
              <RestaurentCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Cardcontainer;
