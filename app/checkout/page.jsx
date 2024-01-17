"use client";
import Header from "@/components/Header";
import { selectItems } from "@/slices/basketSlice";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "@/components/CheckoutProduct";
const Checkhout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                productId={item.productId}
                productName={item.productName}
                productPrice={item.productPrice}
                productDescription={item.productDescription}
                productImage = {item.productImage}
                productMaterial = {item.productMaterial}
                hasPrime = {item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* right */}
      </main>
    </div>
  );
};

export default Checkhout;
// productId,
// productName,
// productPrice,
// productDescription,
// productImage,
// productMaterial,
