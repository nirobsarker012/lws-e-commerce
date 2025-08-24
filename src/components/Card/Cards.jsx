import React from "react";
import { getImgUrl } from "../../utils/product-utils";
import Ratings from "../Ratings";

const Cards = ({ product }) => {
  return (
    <div
      key={Math.random()}
      className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={getImgUrl(product.image)}
          alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex items-center">
              <Ratings value={product.rating} />
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">{product.stock}</span>
        </div>
        <p className="font-bold">${product.price}</p>
        {/* <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                  Remove from Cart
                </button> */}
        <button className="w-full mt-2 bg-blue-800 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
