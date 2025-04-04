import React from 'react'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantBanner from './RestaurantBanner';
import RestaurantDetail from './RestaurantDetail';
import CategoryContainer from './CategoryContainer'

  const Menu = () => {
      const params=useParams();
      const data = useRestaurantMenu(params?.id)
      console.log("params",params);
      console.log("MenuApiData",data);
      const {title,normalMenu,nestedMenu}=data
      console.log("data",data);
      
      // console.log("MenuApiData title", data?.normalMenu[0]?.card?.card?.title);
      // console.log("MenuApiData name", data?.normalMenu[0]?.card?.card?.itemCards[0]?.card?.info?.name);
      console.log("MenuApiData card", data?.normalMenu[0]?.card?.card?.itemCards);
      // console.log("Cuisines: ", data?.title?.cuisines)


    return (
      <div className='w-10/12 mx-auto max-w-[800px]'>
      <RestaurantBanner title={title?.name}/>
      <RestaurantDetail/>
      {/* <CategoryContainer/> */}
      {
        normalMenu.map((category) =>{
          return  (<CategoryContainer categoryTitle={category?.card?.card?.title?.name}
          count={category?.card?.card?.itemCards.length}
            collection={category?.card?.card?.itemCards}/> )
        }) 
      }
  
      </div>

    )
  }

export default Menu




// const Menu = () => {
//   const params = useParams();
//   const data = useRestaurantMenu(params?.id);

//   console.log("params", params);
//   console.log("MenuApiData", data);
//   console.log("MenuApiData", data?.normalMenu[0]?.card?.card?.itemCards?.card?.info?.name);
//     console.log(data?.title?.totalRatingsString)
    
    
//   // Ensure data exists before destructuring
//   const { title, normalmenu, nestedMenu } = data || {};  
// // const {title,normalmenu,nestedMenu}=data

//   return (
//       <div className='w-10/12 mx-auto max-w-[800px]'>
//           <RestaurantBanner title={title?.name} />
//           <RestaurantDetail />
          
//           {/* Ensure normalmenu exists before mapping */}
//           { {normalmenu?.length > 0 ? (
//               normalmenu.map((category, index) => (
//                   <CategoryContainer 
//                       key={index} 
//                       categoryTitle={category?.card?.card?.title} 
//                       count={category?.card?.card?.itemCards?.length} 
//                       collection={category?.card?.card?.itemCards} 
//                   />
//               ))
//           ) : (
//               <p className="text-center text-gray-500 mt-4">Loading menu...</p>
//           )} }
 

 
//           {/* {
//             normalmenu.map(category =>{
//                   <CategoryContainer 
//                       key={index} 
//                       categoryTitle={category?.card?.card?.title} 
//                       count={category?.card?.card?.itemCards?.length} 
//                       collection={category?.card?.card?.itemCards} 
//                   />
//             })
//           } */}
//       </div>
//   );
// };

// export default Menu;
