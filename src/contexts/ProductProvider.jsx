import React, { useState } from "react";
import { AllProductContext } from "./ProductContext";
import { getAllProductData } from "../data/productData";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(getAllProductData);
  const [addCartProduct, setAddCartProduct] = useState([]);
  const productValue = {
    products,
    setProducts,
    addCartProduct,
    setAddCartProduct,
  };
  return <AllProductContext value={productValue}>{children}</AllProductContext>;
};

export default ProductProvider;
