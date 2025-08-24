import React from "react";
import { getImgUrl } from "../../utils/product-utils";

const ProductModalDetails = ({ product, onCloseBtn, onAddCart }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={getImgUrl(product.image)}
            alt={product.name}
          />
          <div className="p-5 lg:p-11 lg:flex lg:flex-col">
            <div className="mb-9">
              <h2 className="text-2xl lg:text-[40px] mb-2 font-bold">
                {product.name}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                In Stock - {product.stock}
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-2">
              <button
                onClick={(e) => onAddCart(e, product)}
                className="bg-teal-900 text-white rounded-lg py-2 px-5 flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer"
              >
                <img src="./assets/tag.svg" alt="" />
                <span>${product.price} | Add to Cart</span>
              </button>
              <button
                onClick={onCloseBtn}
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm cursor-pointer"
                href=""
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalDetails;
