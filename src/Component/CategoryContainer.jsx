import DishDetail from './DishDetail'
import React from 'react'

const CategoryContainer = ({categoryTitle,count,collection,marginTop}) => {
  
  return (
    <>
      <h1 className={`font-bold  text-2xl ${marginTop}`}>{categoryTitle} ({count})</h1>
        {
            collection.map(fooditem =>{
                return <DishDetail key={fooditem?.card?.info?.id}
                imgUrl={fooditem?.card?.info?.imageId}
                isVeg={fooditem?.card?.info?.isVeg}
                title={fooditem?.card?.info?.name}
                price={
                  fooditem?.card?.info?.defaultPrice  
                  ? fooditem?.card?.info?.defaultPrice/100 
                  : fooditem?.card?.info?.price/100 }
                avgRating={fooditem?.card?.info?.ratings?.aggregatedRating?.rating || "be the first one to try"}
                description={fooditem?.card?.info?.description}
                />
            })
        }
        </>
  )
}

export default CategoryContainer;