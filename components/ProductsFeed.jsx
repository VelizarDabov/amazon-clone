"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Products from "./Products";

const ProductFeed = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const createProducts = () => {
      return {
        productId: faker.string.uuid(),
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        productDescription: faker.commerce.productDescription(),
        productImage: faker.image.urlLoremFlickr({ category: "abstract" }),
        productMaterial: faker.commerce.productMaterial(),
      };
    };
    const products = faker.helpers.multiple(createProducts, {
      count: 20,
    });
    setProducts(products);
  }, []);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 3).map((product) => (
        <Products
          key={product.productId}
          productName={product.productName}
          productPrice={product.productPrice}
          productDescription={product.productDescription}
          productImage={product.productImage}
          productMaterial={product.productMaterial}
        />
      ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products.slice(3,4).map((product) => (
          <Products
            key={product.productId}
            productName={product.productName}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            productImage={product.productImage}
            productMaterial={product.productMaterial}
          />
        ))}
      </div>
      {products.slice(4, products.length).map((product) => (
          <Products
            key={product.productId}
            productName={product.productName}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            productImage={product.productImage}
            productMaterial={product.productMaterial}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
