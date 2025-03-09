import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({masterCollection,updater,text,updateText}) => {

    const handleSearch=()=>{
        const newdata=masterCollection.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(text.toLowerCase()))
        console.log("newdata",newdata);
        updater(newdata) 
      }

      const handleSearchText = (val) => {
        updateText(val);
      };
    
  return (
    <div className="relative w-full max-w-xs">
             <input
               className="border-[1px] p-2 border-black rounded-md w-full "
               type="text"
               value={text}
               onChange={(e) => handleSearchText(e.target.value)}
               placeholder="Enter name of restaurant"
             />
          
            {text.trim() && <button onClick={handleSearch}  className="text-xl absolute right-0 top-1/2 -translate-y-1/2 mr-1">  <FontAwesomeIcon icon={faMagnifyingGlass}/> </button>}
        
           </div>
  )
}

export default SearchBar