import React from "react";
import "./FeatureProduct.scss";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
const FeatureProduct = ({ type }) => {
  const url = "http://localhost:1337/api";
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.REACT_APP_API_URL +
  //           `/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  //           },
  //         }
  //       );
  //       setData(res.data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className=" my-[100px] ">
      <div className="flex items-center justify-between mb-[50px] mx-auto md:mx-[200px]">
        <h1 className=" capitalize p-4">{type} products</h1>
        <p className="text-[gray] p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          voluptatem iure illo non molestias quas inventore sequi iste cumque,
          commodi nemo enim atque fugiat deserunt sint. Voluptatibus soluta
          labore deleniti.
        </p>
      </div>
      <div className="items-center flex md:flex-row flex-col justify-center gap-[50px]  ">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
