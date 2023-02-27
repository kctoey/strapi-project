import React from "react";

import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="w-[280px] flex flex-col gap-2.5">
        <div className="group  w-full h-[400px] overflow-hidden relative">
          {item?.attributes.isNew && (
            <span className="absolute bg-[white] text-[teal] z-[3] font-medium text-xs px-[5px] py-[3px] left-[5px] top-[50px]">
              New Season
            </span>
          )}
          <img
            src={
              process.env.REACT_APP_API_UPLOAD +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="group-hover:hidden w-full h-[400px]"
          />
          <img
            src={
              process.env.REACT_APP_API_UPLOAD +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="hidden group-hover:flex w-full h-[400px]"
          />
        </div>
        <h2 className="text-base font-normal">{item?.attributes.title}</h2>
        <div className="flex gap-5">
          <h3 className="text-lg font-medium first:text-[gray] first:line-through">
            ฿{item.oldPrice || item?.attributes.price + 20}
          </h3>
          <h3 className="text-lg font-medium first:text-[gray] first:line-through">
            ฿{item?.attributes.price}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
