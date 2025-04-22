import React from 'react'

const OfferCard = ({header,couponCode}) => {
  return (
    <div className="border font-bold rounded-xl p-4 pe-20 flex gap-2">
    <img className= "max-w-full h-[3rem]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"/>
    <div className="flex flex-col justify-between" >
        <h1 className="text-xl">{header}</h1>
        <h2 className="text-gray-300">{couponCode}</h2>
    </div>
</div>
  )
}

export default OfferCard
