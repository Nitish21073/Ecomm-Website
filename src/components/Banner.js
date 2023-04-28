import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Banner = () => {
    const [currentSlide,setcurrentSlide] = useState(0);
  const data = [
    "https://as1.ftcdn.net/v2/jpg/03/20/68/66/1000_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg",
    "https://as1.ftcdn.net/v2/jpg/04/65/46/52/1000_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    "https://as1.ftcdn.net/v2/jpg/05/26/53/52/1000_F_526535232_3FG0tckX1I3yAaHqqBeCdt0MVE1A5UQ2.jpg",
  ];
  const prevSlide = ()=>{
    setcurrentSlide(currentSlide===0?2:(prev)=>prev-1)
  }
  const nextSlide = ()=>{
    setcurrentSlide(currentSlide===2?0:(prev)=>prev+1)
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide*100}vw)`}} className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="imgTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="imgThree"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
