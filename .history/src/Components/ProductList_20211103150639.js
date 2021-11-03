import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.data);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Product</h1>
    </>
  );
};

export default ProductList;
