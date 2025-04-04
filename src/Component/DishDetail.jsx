import React from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DISH_URL } from '../Contants/Config';

const DishDetail = ({imgUrl,isVeg,title,price,avgRating}) => {
  return (
    <div className='flex justify-between pb-5'>
      <div>
        <div>
            {isVeg? "🟢" :"🔴"}
        </div>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <p><FontAwesomeIcon className="text-green-700" icon={faStar} />{avgRating}</p>
      </div>
        <div>
            <img src={DISH_URL+imgUrl} alt="image" />
        </div>
    </div>
  )
}

export default DishDetail