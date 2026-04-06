const ShimmerCard = () => {
  return (
    <div className="m-3 animate-pulse">
      {/* Image placeholder — matches RestaurantCard image height */}
      <div className="w-full h-[140px] md:h-[160px] lg:h-[180px] bg-gray-200 rounded-xl"></div>

      {/* Details placeholder — matches RestaurantCard details */}
      <div className="mt-2 px-2 space-y-2">
        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
