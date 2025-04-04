import React, { useState } from "react";
import RestaurentCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

const Cardcontainer = () => {
  const [searchText, setSearchText] = useState("");
  const restaurantData = useRestaurant();
  const { errorMessage, RestaurantList, masterList, updateRestaurants } =
    restaurantData;

  // Filter Handlers
  const handleRating = () => {
    const filtered = RestaurantList.filter((r) => r.info.avgRating >= 4.5);
    updateRestaurants(filtered);
  };

  const handleVeg = () => {
    const filtered = RestaurantList.filter((r) => r?.info?.veg === true);
    updateRestaurants(filtered);
  };

  const handleBudget = () => {
    const filtered = RestaurantList.filter(
      (r) => parseInt(r?.info?.costForTwo?.match(/\d+/)?.[0]) <= 300
    );
    updateRestaurants(filtered);
  };

  const handleCostLowToHigh = () => {
    const sorted = [...RestaurantList].sort((a, b) => {
      const costA = parseInt(a?.info?.costForTwo?.match(/\d+/)?.[0]);
      const costB = parseInt(b?.info?.costForTwo?.match(/\d+/)?.[0]);
      return costA - costB;
    });
    updateRestaurants(sorted);
  };

  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div className="container mx-auto px-6 py-6">
      {/* Search & Filters */}
      <h1 className="text-2xl mb-5 font-bold">Top Restaurant Chains</h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 gap-4">
        {/* Search input on the left */}
        <div className="w-full md:w-1/2">
          <SearchBar
            masterCollection={masterList}
            updater={updateRestaurants}
            text={searchText}
            updateText={setSearchText}
          />
        </div>

        {/* Filter buttons on the right */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            onClick={handleRating}
          >
            Top Rated
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            onClick={handleBudget}
          >
            Budget Friendly
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            onClick={handleVeg}
          >
            Pure Veg
          </button>
          <button 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
            onClick={handleCostLowToHigh}
          >
            Cost: Low to High
          </button>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {RestaurantList.length === 0 ? (
          masterList.length === 0 ? (
            <ShimmerCard />
          ) : (
            <h1 className="text-center text-xl text-gray-500">
              No restaurants found for{" "}
              <span className="text-red-500">"{searchText}"</span>
            </h1>
          )
        ) : (
          RestaurantList.map((restaurant) => (
            <RestaurentCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))
        )}
      </div>
    </div>
  );
};

export default Cardcontainer;
