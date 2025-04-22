import React from 'react'

const RestaurantBanner = ({title,padding}) => {
  return (
    <>
    <h1 className={`text-2xl font-bold ${padding}`}>{title}</h1>
    </>
  )
}

export default RestaurantBanner