import React from "react";
import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URl } from "../Contants/Config";
import ShimmerCard from "./ShimmerCard";

const Cardcontainer = () => {
  const [RestaurantList, setRestaurantList] = useState([]);

  const handleRating = () => {
    const FilterData = RestaurantList.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.5;
    });

    setRestaurantList(FilterData);

    // console.log(FilterData);
  };

  useEffect(() => {
    const getRestaurantsData = async () => {
      try {
        const response = await fetch(API_URl);
        const data = await response.json();
        // console.log("carasoul data",data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info );
        console.log(
          "Restaurnat data",
         data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurantList(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    getRestaurantsData();
  },[]);

  
  return (

    // <>
    //   <button
    //     className="bg-gray-300 p-2 rounded-lg shadow-md hover:bg-gray-400"
    //     onClick={handleRating}
    //   >
    //     Top Rated Restaurants
    //   </button>

    //   <div className="flex gap-4 px-4 py-4 flex-wrap justify-center">

    //   {RestaurantList.length === 0 ? (
    //     <ShimmerCard />
    //   ) : (
    //     RestaurantList.map((restaurant) => {
    //       return (
    //         <RestaurentCard
    //           key={restaurant?.info?.id}
    //           // img={restaurant.img}
    //           // name={restaurant.name}
    //           // rating={restaurant.rating}
    //           // deliveryTime={restaurant.deliveryTime}
    //           // cuision={restaurant.cuision}
    //           // location={restaurant.location}

    //           {...restaurant?.info}
    //         />
    //       );
    //     })
        
    //   )}
    //   </div>
    // </>


    // )}

    <>
    <button
      className="bg-gray-300 p-2 rounded-lg shadow-md hover:bg-gray-400"
      onClick={handleRating}
    >
      Top Rated Restaurants
    </button>

    <div className="flex gap-4 px-4 py-4 flex-wrap justify-center">
      {RestaurantList.length === 0 ? <ShimmerCard />
       : 
        RestaurantList.map((restaurant) => (
        
          <RestaurentCard key={restaurant?.info?.id} {...restaurant?.info} />
         
        )
      )}
      {/* {
        RestaurantList.map((restaurant)=>(
           <RestaurentCard
          {...restaurant?.info}
          />
        ))
      } */}
      
    </div>
  </>
  );
};

export default Cardcontainer;
