import { useState,useEffect } from "react";
import { API_URl } from "../Contants/Config";

const useRestaurant=()=>{
         const [RestaurantList, setRestaurantList] = useState([]);
          const [masterList, setMasterList] = useState([]);
           const [errorMessage, setErrorMessage] = useState("");

     useEffect(() => {
        const getRestaurantsData = async () => {
          const response = await fetch(API_URl);
          console.log("response", response);
    
          try {
            if (response.ok) {
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
    
              setMasterList(
                data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
              )
            } else {
              // console.log(response.status);
              if (response.status === 400) {
                throw new Error("Bad request, get in touch with  support team");
              }
              if (response.status === 401) {
                throw new Error("unauthorized request, kindly provide credentials");
              }
              if (response.status === 403) {
                throw new Error("The requested content is forbidden");
              }
              if (response.status === 404) {
                throw new Error("the server cannot find requested resource");
              } else {
                throw new Error("something went Wrong");
              }
            }
          } catch (error) {
            setErrorMessage(error.message);
            console.log("error", error.message);
          }
        };
        getRestaurantsData();
      }, []);
    

      const resObject={
        RestaurantList:RestaurantList,
        masterList:masterList,
        errorMessage:errorMessage,
        updateRestaurants:setRestaurantList,
        // updateMasterList:setMasterList,
        // updateError:setErrorMessage
      }
    return resObject
}


export default useRestaurant