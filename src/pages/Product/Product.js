import React from "react";

import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="flex gap-[50px] py-5 md:justify-center">
      {loading ? (
        "loading"
      ) : (
        <div className="flex md:flex-row flex-col ">
          <div className=" flex gap-5 flex-col  md:flex-row">
            <div>
              <img
                className="w-full rounded-xl p-4 max-h-[800px] object-cover"
                src={
                  process.env.REACT_APP_API_UPLOAD +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
            <div className="md:text-start ">
              <img
                className="md:mt-4 p-4 md:p-0 inline md:block md:w-full h-[150px] object-cover cursor-pointer mb-2.5"
                src={
                  process.env.REACT_APP_API_UPLOAD +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                className="p-4 md:p-0 inline md:block  md:w-full h-[150px] object-cover cursor-pointer mb-2.5"
                src={
                  process.env.REACT_APP_API_UPLOAD +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[30px]  p-4 md:ml-20 items-center">
            <h1>{data?.attributes?.title}</h1>
            <span className="text-3xl text-[#2879fe] font-medium">
              ${data?.attributes?.price}
            </span>
            <p className="text-lg font-light text-justify">
              {data?.attributes?.desc}
            </p>
            <div className="flex items-center gap-2.5">
              <button
                className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-[none]"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="w-[250px] bg-[#2879fe] text-[white] flex items-center justify-center gap-5 cursor-pointer font-medium p-2.5 border-[none]
            "
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="flex gap-5">
              <div className="flex items-center gap-2.5 text-[#2879fe] text-sm">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="flex items-center gap-2.5 text-[#2879fe] text-sm">
                <BalanceIcon /> ADD TO CAMPARE
              </div>
            </div>
            <div className="flex flex-col gap-2.5 text-[gray] text-sm mt-[30px]">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Woman,Top</span>
            </div>
            <hr className="w-[400px] border ml-0 border-solid border-[lightgray]" />
            <div className=" flex flex-col gap-2.5 text-[gray] text-sm mt-[30px]">
              <span>DESCRIPTION</span>
              <hr className="w-[200px] border ml-0 border-solid border-[lightgray]" />
              <span>ADDITIONAL INFORMATION</span>
              <hr className="w-[200px] border ml-0 border-solid border-[lightgray]" />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
