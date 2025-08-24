import React, { use, useState } from "react";
import { getImgUrl } from "../../utils/product-utils";
import Ratings from "../Ratings";
import ProductModalDetails from "../Modals/ProductModalDetails";
import { AllProductContext } from "../../contexts/ProductContext";

const Cards = ({ product }) => {
  const { addCartProduct, setAddCartProduct } = use(AllProductContext);
  const [showModal, setShowModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectProduct(product);
    setShowModal(true);
  };

  const handleCloseBtn = () => {
    setShowModal(false);
  };

  const handleAddCart = (e, product) => {
    e.stopPropagation();
    // console.log(product);
    const found = addCartProduct.find((item) => {
      return item.id === product.id;
    });

    if (!found) {
      setAddCartProduct([...addCartProduct, product]);
    } else {
      console.error(`The product ${product.name} has been already added.`);
    }
  };
  return (
    <>
      {showModal && (
        <ProductModalDetails
          product={selectProduct}
          onCloseBtn={handleCloseBtn}
          onAddCart={handleAddCart}
        />
      )}
      <div
        onClick={() => handleProductSelection(product)}
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
          <button
            onClick={(e) => handleAddCart(e, product)}
            className="w-full mt-2 bg-blue-800 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
