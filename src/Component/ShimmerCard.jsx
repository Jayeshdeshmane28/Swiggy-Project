

const ShimmerCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {new Array(20).fill(0).map((_, index) => (
        <div key={index} className="px-2">
          <div className="pb-2 w-[300px] md:max-w-[250px] h-[150px] shadow-md rounded-[15px]">
            <div className="w-full h-[150px]">
              <div className="bg-[#f7f7f7] w-full h-full object-cover rounded-[15px]" />
            </div>
            <h2 className="font-semibold text-2xl h-2 w-full bg-[#f7f7f7] my-2"></h2>
            <div className="flex gap-2 my-1 justify-between">
              <h2 className="text-[16px] font-semibold h-4 w-24 bg-[#f7f7f7]"></h2>
              <h2 className="text-[16px] font-semibold h-4 w-24 bg-[#f7f7f7]"></h2>
            </div>
          </div>
          <p className="text-gray-500 px-3 h-2 w-11/12 bg-[#f7f7f7] my-2 mx-auto"></p>
          <p className="text-gray-500 px-3 h-2 w-11/12 bg-[#f7f7f7] my-2 mx-auto"></p>
        </div>
      ))}
    </div>
  );
};




export default ShimmerCard;
