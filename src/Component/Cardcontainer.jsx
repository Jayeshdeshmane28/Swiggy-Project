import React from 'react'
import RestaurentCard from './RestaurantCard'
import { useState } from 'react'
import { RestaurantData } from '../Contants/Config'

const Cardcontainer = () => {

    const[RestaurantList,setRestaurantList]=useState(RestaurantData);
 
  const handleRating=()=>{
      const FilterData=RestaurantList.filter((restaurant)=>{
       return restaurant.rating >=4.5
      })
      setRestaurantList(FilterData)
      // console.log(RestaurantList);
      
  }

  return (

    <>
    <button className='bg-gray-300 p-2 rounded-lg shadow-md hover:bg-gray-400' onClick={handleRating}>Top Rated Restaurants</button>

 
    <div className='flex gap-4 px-4 py-4 flex-wrap justify-center'>
    {
    RestaurantList.map((restaurant)=>{
      return<RestaurentCard 
      // img={restaurant.img}
      // name={restaurant.name}
      // rating={restaurant.rating}
      // deliveryTime={restaurant.deliveryTime}
      // cuision={restaurant.cuision}
      // location={restaurant.location}

      {...restaurant}
      />
    })
    }
    </div>
    </>
  )
}

export default Cardcontainer