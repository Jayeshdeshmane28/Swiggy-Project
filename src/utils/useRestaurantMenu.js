import React from 'react'
import { useState, useEffect } from 'react'
import { generateMenuURL } from '../Contants/Config'

const useRestaurantMenu = (id) => {
    const MENU_API_URl = generateMenuURL(id)
    const [resInfo, setResInfo] = useState([])
    const [menu, setMenu] = useState([])
    const [filterNormalData, setFilterNormalData] = useState([])
    const [filterNestedData, setFilterNestedData] = useState([])
    const [offers, setOffers] = useState([]);
    useEffect(() =>{
        const getMenuData = async () => {   
            try {
                const data = await fetch(MENU_API_URl)
                const json = await data.json();
                console.log("data", json?.data?.cards);
    
                // console.log("title", json?.data?.cards[2]?.card?.card?.info?.name);
                // console.log("res info", json?.data?.cards[2]?.card?.card?.info);
                setResInfo(json?.data?.cards[2]?.card?.card?.info)
    
                const resData = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                
                console.log("raw data",resData);
                // offer
                setOffers(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
                console.log("offers",json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers );

                setFilterNormalData(resData.filter(resItem => resItem?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
                setFilterNormalData (json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>{
                    return  (card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                  }));
                  
                setFilterNestedData(resData.filter(resItem => resItem?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'))
                console.log('filternormal data', filterNormalData);
                console.log('nested data', filterNestedData);
                setMenu(json?.data?.cards)
    
            }
             catch (error) {
                console.log("error", error);
    
            }
    
        }
        
        getMenuData()}, []);

    const menuObject = {
        title: resInfo,
        normalMenu: filterNormalData,
        nestedMenu:filterNestedData,
        offers : offers
    }
    return menuObject;

}

export default useRestaurantMenu