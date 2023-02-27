import React from "react";
import paypal from "../../img/pngegg.png";

const Footer = () => {
  return (
    <div className="mt-[100px] mb-5 md:mx-[200px] ">
      <div className="flex gap-[50px] md:flex-row flex-col">
        <div className=" flex flex-col gap-2.5 text-center md:text-justify text-sm">
          <h1 className="text-lg font-medium text-[#555]">Categories</h1>

          <ul className=" flex flex-col    ">
            <li className="text-[gray]">Women</li>
            <li className="text-[gray]">Men</li>
            <li className="text-[gray]">Shoes</li>
            <li className="text-[gray]">Accessories</li>
          </ul>
        </div>
        <div className="  flex flex-col gap-2.5 text-center md:text-justify text-sm">
          <h1 className="text-lg font-medium text-[#555] ">Link</h1>
          <ul className="flex flex-col ">
            <li className="text-[gray]">FAQ</li>
            <li className="text-[gray]">Pages</li>
            <li className="text-[gray]">Stores</li>
            <li className="text-[gray]">Compare</li>
            <li className="text-[gray]">Cookies</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-2.5 text-center md:text-justify text-sm px-4">
          <h1 className="text-lg font-medium text-[#555]">About</h1>
          <span className="text-[gray] flex md:flex-col flex-row ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            officia esse corporis, quos, debitis iusto,
          </span>
        </div>
        <div className=" flex flex-col gap-2.5 text-center md:text-justify text-sm px-4">
          <h1 className="text-lg font-medium text-[#555]">Contact</h1>
          <span className="text-[gray] flex md:flex-col flex-row">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            officia esse corporis, quos, debitis iusto,
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[50px] px-4">
        <div className="flex items-center">
          <span className="text-[#2879fe] font-[bold] text-2xl">
            Kancha store
          </span>
          <span className="text-xs text-[gray] ml-5">
            Copyright. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img className="h-[50px]" src={paypal} alt="paypal" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
