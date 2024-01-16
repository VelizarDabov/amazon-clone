"use client";
import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import prime from '../assets/prime.jpg';

const Products = ({
  productId,
  productName,
  productPrice,
  productDescription,
  productImage,
  productMaterial,
}) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{productMaterial}</p>
      <Image src={productImage} width={200} height={200} objectFit="contain" className="mx-auto"/>
      <h4 className="my-3">{productName}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{productDescription}</p>
      <div>
        <p className="mb-5">${productPrice}</p>
      </div>
      {hasPrime&& ( 
        <div className="flex items-center space-x-2 -mt-5">
<img className="w-12 h-12" src={prime} alt="" />
<p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
      )}
      <button className="mt-auto button">Add to basket</button>
    </div>
  );
};

export default Products;
