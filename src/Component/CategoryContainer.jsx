import DishDetail from './DishDetail'
import React from 'react'

const CategoryContainer = ({categoryTitle,count,collection}) => {
  return (
    <>
      <h1>{categoryTitle} ({count})</h1>
        {
            collection.map(fooditem =>{
                return <DishDetail key={fooditem?.id}
                imgUrl={fooditem?.card?.info?.imageId}
                isVeg={fooditem?.card?.info?.isVeg}
                title={fooditem?.card?.info?.name}
                price={fooditem?.card?.info?.defaultPrice/100}
                avgRating={fooditem?.card?.info?.ratings?.aggregatedRating?.rating}
                />
            })
        }
        </>
  )
}

export default CategoryContainer;