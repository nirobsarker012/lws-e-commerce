import React, { use } from "react";
import { AllProductContext } from "../../contexts/ProductContext";
import { getImgUrl } from "../../utils/product-utils";

const MyCardList = () => {
  const { addCartProduct, setAddCartProduct } = use(AllProductContext);

  const handleDelete = (id) => {
    const filterItems = addCartProduct.filter((item) => item.id !== id);
    setAddCartProduct(filterItems);
  };

  const handleIncrement = (id) => {
    const updatedCart = addCartProduct.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setAddCartProduct(updatedCart);
  };

  // Decrement quantity
  const handleDecrement = (id) => {
    const updatedCart = addCartProduct.map((item) =>
      item.id === id && (item.quantity || 1) > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setAddCartProduct(updatedCart);
  };

  // Calculate subtotal using reduce
  const subtotal = addCartProduct.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  //  Discount 20%
  const discount = subtotal * 0.2;

  //  Delivery Fee (flat rate)
  const deliveryFee = addCartProduct.length > 0 ? 15 : 0;

  //  Final Total
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {/* <!-- Cart Items --> */}
        {addCartProduct.length === 0 && <span>No Items Choose Yet!</span>}
        {addCartProduct.map((singleProduct) => (
          <div
            key={singleProduct.id}
            className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
          >
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img
                src={getImgUrl(singleProduct.image)}
                alt={singleProduct.name}
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between">
                <h3 className="font-medium">{singleProduct.name}</h3>
                <span
                  onClick={() => handleDelete(singleProduct.id)}
                  className="text-red-500 text-2xl cursor-pointer bg-red-200 w-[30px] inline-flex items-center justify-center rounded-full"
                >
                  ×
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Size: {singleProduct.size}
              </p>
              <p className="text-sm text-gray-500">
                Color: {singleProduct.color}
              </p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold">
                  $
                  {(
                    singleProduct.price * (singleProduct.quantity || 1)
                  ).toFixed(2)}
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(singleProduct.id)}
                    className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-2xl cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-sm">{singleProduct.quantity || 1}</span>
                  <button
                    onClick={() => handleIncrement(singleProduct.id)}
                    className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-2xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <!-- Order Summary --> */}
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount (-20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* <!-- Promo Code --> */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
              />
              <span className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </span>
            </div>
            <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
              Apply
            </button>
          </div>

          {/* <!-- Checkout Button --> */}
          <a
            href="#"
            className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Go to Checkout
            <span className="inline-block ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCardList;
