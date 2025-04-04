import React from "react";
import Cardcontainer from "./Cardcontainer";
import Carousel from "./Carousel";

const Body = () => {
  return (
    <>
      {/* <div>im body Component</div> */}
      <div className="mx-3">
        <Carousel/>
        <Cardcontainer/>
      </div>
    </>
  );
};

export default Body;
