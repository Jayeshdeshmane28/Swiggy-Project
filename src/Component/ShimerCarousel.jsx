import React from 'react'

const ShimerCarousel = () => {
    return(
        new Array(10).fill(0).map((card, index)=> {
    return(
        <div className="w-[10vw] h-max" key={index}>
            <div className=" w-full max-w-[12rem] h-40 bg-[#e7e7e7]" ></div>
        </div>
    ) 
    })
)
}

export default ShimerCarousel
