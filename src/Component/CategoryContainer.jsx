import React, { useState } from 'react'
import DishDetail from './DishDetail'
import { ChevronDown, ChevronUp } from "lucide-react";

const CategoryContainer = ({ categoryTitle, count, collection, marginTop }) => {
  const [isActive, setIsActive] = useState(false); // State to toggle accordion

  return (
    <>
      <div className={`border-b border-gray-300 ${marginTop}`}>
        {/* Header (click to toggle) */}
        <div
          className="py-5 flex justify-between cursor-pointer"
          onClick={() => setIsActive(!isActive)} // Toggle accordion
        >
          <h1 className="font-bold text-2xl">
            {categoryTitle} ({count})
          </h1>
          <div>
            {isActive ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>

        {/* Content (only show when active) */}
        {isActive && (
          <div className="lg:pl-5">
            {collection.map((fooditem) => (
              <DishDetail
                key={fooditem?.card?.info?.id}
                imgUrl={fooditem?.card?.info?.imageId}
                isVeg={fooditem?.card?.info?.isVeg}
                title={fooditem?.card?.info?.name}
                price={
                  fooditem?.card?.info?.defaultPrice
                    ? fooditem?.card?.info?.defaultPrice / 100
                    : fooditem?.card?.info?.price / 100
                }
                avgRating={
                  fooditem?.card?.info?.ratings?.aggregatedRating?.rating ||
                  "Be the first one to try"
                }
                description={fooditem?.card?.info?.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default CategoryContainer
