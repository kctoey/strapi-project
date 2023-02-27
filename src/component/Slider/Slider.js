import React from "react";
import woman from "../../img/woman.png";
import man from "../../img/man.png";
import child from "../../img/child.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Slider.scss";
import { useState } from "react";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="h-[calc(100vh_-_80px)] w-screen relative overflow-hidden">
      <div
        className="w-[300vw] h-full flex transition-all duration-[1s] ease-[ease] z-10"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="w-screen h-full object-cover" src={woman} alt="" />
        <img className="w-screen h-full object-cover" src={man} alt="" />
        <img className="w-screen h-full object-cover" src={child} alt="" />
      </div>
      <div className="absolute flex w-[100px] m-auto bottom-[100px] inset-x-0">
        <div
          className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer text-[white] border-[none]"
          onClick={prevSlide}
        >
          <ArrowBackIosIcon />
        </div>
        <div
          className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer text-[white] border-[none]"
          onClick={nextSlide}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
