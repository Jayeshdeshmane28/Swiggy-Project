import React, { useState, useEffect, useRef } from 'react';
import ShimerCarousel from './ShimerCarousel';
import OfferCard from './OfferCard';

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
      leftIcon.style.color = 'gray';
    } else {
      leftIcon.style.color = '#252525';
    }

    const maxScroll =
      scrollElement.scrollWidth - scrollElement.clientWidth;

    if (
      Math.ceil(scrollElement.scrollLeft) >= maxScroll ||
      Math.floor(scrollElement.scrollLeft) >= maxScroll
    ) {
      rightIcon.style.color = 'gray';
    } else {
      rightIcon.style.color = '#252525';
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
      <div className='w-full my-5 flex justify-between'>
        <div>
          <h1 className='font-bold text-2xl'>Deals for you</h1>
        </div>
        <div className='flex text-4xl gap-3'>
          <i
            ref={leftIconRef}
            className='fa-regular fa-circle-left text-gray-500'
            onClick={moveLeft}
          ></i>
          <i
            ref={rightIconRef}
            className='fa-regular fa-circle-right text-[#252525]'
            onClick={moveRight}
          ></i>
        </div>
      </div>

      <div
        className='w-[80vw] h-auto overflow-x-auto scroll-smooth mx-auto'
        id='scrollbar'
        ref={scrollRef}
        onScroll={(e) => setScroll(e.target.scrollLeft)}
      >
        <div className='w-max flex flex-row gap-5'>
          {offers.length === 0 ? (
            <ShimerCarousel/>
          ) : (
            offers.map((offer) => (
              <OfferCard
                {...offer?.info}
                key={offer?.info?.offerIds[0]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuOffer;
