
const ShimmerCard = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-row justify-center gap-6 py-6">
      {new Array(8).fill(0).map((_, index) => (
        <div 
          key={index} 
          className="w-[250px] md:w-[280px] lg:w-[300px] bg-white rounded-xl shadow-lg p-4 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full h-[160px] md:h-[180px] lg:h-[200px] bg-gray-200 rounded-lg"></div>

          {/* Text Details Placeholder */}
          <div className="mt-3 space-y-3">
            <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div> {/* Name */}
            <div className="flex gap-4">
              <div className="h-4 w-12 bg-gray-200 rounded-md"></div> {/* Rating */}
              <div className="h-4 w-16 bg-gray-200 rounded-md"></div> {/* Delivery Time */}
            </div>
            <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div> {/* Cuisines */}
            <div className="h-4 w-4/6 bg-gray-200 rounded-md"></div> {/* Locality */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;


// function ShimmerRestaurantCard() {
//   return new Array(20).fill(0).map((card, index) => {
//       return (
//           <div key = {index} className="w-[300px] border py-3 px-3 rounded-[30px]">  
//           {/* Here, we are using index as a key since we don't have anything to fetch keys for a shimmer card. */}
//               <div className="w-[300px] md:max-w-[275px] h-[150px]">
//                   <div className="w-[275px] h-full object-cover bg-gray-200 animate-pulse rounded-[20px]"/>
//               </div>
//               <div className="text-[18px] mx-3 pt-3">
//                   <p className="font-bold h-5 bg-gray-200 animate-pulse w-60"></p>
//                   <div className="flex font-semibold gap-2">
//                       <p className="h-3 bg-gray-200 animate-pulse mt-3 w-16"></p>  
//                       <p className="h-3 bg-gray-200 animate-pulse mt-3 w-16"></p>
//                   </div>
//                   <p className="bg-gray-200 animate-pulse h-3 mt-3 w-44"></p>
//                   <p className="bg-gray-200 animate-pulse h-3 mt-3 w-44"></p>
//             </div>
//           </div>
//       );
//   })

// }

// export default ShimmerRestaurantCard;