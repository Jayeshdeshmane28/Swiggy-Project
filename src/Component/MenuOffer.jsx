import React, { useState, useEffect, useRef } from "react";
import ShimerCarousel from "./ShimerCarousel";
import OfferCard from "./OfferCard";
import { IoIosSearch } from "react-icons/io";

const MenuOffer = ({ offers }) => {
  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(null);
  const leftIconRef = useRef(null);
  const rightIconRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const leftIcon = leftIconRef.current;
    const rightIcon = rightIconRef.current;

    if (!scrollElement || !leftIcon || !rightIcon) return;

    if (scrollElement.scrollLeft === 0) {
      leftIcon.style.color = "gray";
    } else {
      leftIcon.style.color = "#252525";
    }

    const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;

    if (
      Math.ceil(scrollElement.scrollLeft) >= maxScroll ||
      Math.floor(scrollElement.scrollLeft) >= maxScroll
    ) {
      rightIcon.style.color = "gray";
    } else {
      rightIcon.style.color = "#252525";
    }
  }, [scroll]);

  const moveLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 150;
    }
  };

  const moveRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 150;
    }
  };

  return (
    <div>
      <div className="w-full my-5 flex justify-between items-center">
        {/* Left side: Title */}
        <h1 className="font-bold text-2xl">Deals for you</h1>

        {/* Right side: Arrows */}
        <div className="flex gap-3">
          <button  ref={leftIconRef}
          onClick={moveLeft}
          className="bg-gray-200 rounded-full p-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 20H10m0 0l9-9m-9 9l9 9"
                stroke="#222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button  ref={rightIconRef}
    onClick={moveRight} className="bg-gray-200 rounded-full p-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20h24m0 0l-9-9m9 9l-9 9"
                stroke="#222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="m-auto overflow-x-auto custom-scrollbar scroll-smooth pb-5"
        id="scrollbar"
        ref={scrollRef}
        onScroll={(e) => setScroll(e.target.scrollLeft)}
      >
        <div className="w-max flex flex-row gap-5">
          {offers.length === 0 ? (
            <ShimerCarousel />
          ) : (
            offers.map((offer) => (
              <OfferCard {...offer?.info} key={offer?.info?.offerIds[0]} />
            ))
          )}
        </div>
      </div>

      <div className="flex gap-1 items-center justify-center py-3">
        <svg
          width="30"
          viewBox="0 0 131 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 44C20 44 28 42 40 35C52 28 60 24 70 24C83 24 94 32 94 48C94 64 83 72 70 72C58 72 52 64 52 56C52 48 58 44 64 44"
            stroke="#44474F"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M94 44H122"
            stroke="#44474F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <span className="font-bold text-xs tracking-[0.4rem] ml-2 text-gray-600">
          MENU
        </span>
        <svg  
          width="30"
          viewBox="0 0 131 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120 44C111 44 103 42 91 35C79 28 71 24 61 24C48 24 37 32 37 48C37 64 48 72 61 72C73 72 79 64 79 56C79 48 73 44 67 44"
            stroke="#44474F"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37 44H9"
            stroke="#44474F"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative flex justify-center my-3">
        <input
          type="text"
          disabled
          className="bg-gray-100 w-full h-11 px-4 rounded-xl"
          placeholder="Search for dishes"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl">
          <IoIosSearch className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default MenuOffer;
