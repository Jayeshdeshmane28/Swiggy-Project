import React from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantBanner from "./RestaurantBanner";
import RestaurantDetail from "./RestaurantDetail";
import CategoryContainer from "./CategoryContainer";
import MenuOffer from "./MenuOffer";

const Menu = () => {
  const params = useParams();
  const data = useRestaurantMenu(params?.id);
  console.log("params", params);
  console.log("MenuApiData", data);
  const { title, normalMenu, nestedMenu } = data; 

  console.log("data", data);

  console.log("MenuApiData title", data?.normalMenu[0]?.card?.card?.title);
 
  console.log("MenuApiData card", data?.normalMenu[0]?.card?.card?.itemCards);
  // console.log("Cuisines: ", data?.title?.cuisines)

  
    // console.log("costForTwoMessage",title?.costForTwoMessage);
    

  return (
    <div className="w-10/12 mx-auto max-w-[800px]">
      <RestaurantBanner title={title?.name} padding={"py-6"}/>
      <RestaurantDetail  rating ={title?.avgRating} ratingNumber = {title?.totalRatingsString} costOfTwo = {title?.costForTwoMessage} cuisines={title?.cuisines} areaName = {title?.areaName} deliveryTime={title?.sla?.slaString}/>
      {/* <MenuOffer offers={offers}/> */}
    {/* <RestaurantBanner/> */}
    
      {
        normalMenu.map((category) =>{
          return  (<CategoryContainer key={category?.card?.title?.id}
             categoryTitle={category?.card?.card?.title}
          count={category?.card?.card?.itemCards.length}
            collection={category?.card?.card?.itemCards}
            marginTop={"mt-5"}/>
            )
        }) 
      }

      {nestedMenu.map((mainCategory) => (
        <>
          <RestaurantBanner title={mainCategory?.card?.card?.title} />
          {mainCategory?.card?.card?.categories.map((subCategory) => (
            <CategoryContainer
              key={subCategory?.title?.id}
              categoryTitle={subCategory.title}
              count={subCategory?.itemCards.length}
              collection={subCategory?.itemCards}
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default Menu;
