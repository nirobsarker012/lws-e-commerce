import React, { useState } from "react";
import { AllProductContext } from "./ProductContext";
import { getAllProductData } from "../data/productData";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(getAllProductData);
  const productValue = {
    products,
    setProducts,
  };
  return <AllProductContext value={productValue}>{children}</AllProductContext>;
};

export default ProductProvider;
