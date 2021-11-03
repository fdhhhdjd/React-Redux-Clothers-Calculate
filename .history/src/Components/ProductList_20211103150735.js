import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/Actions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(setProducts());
  }, []);
  return (
    <>
      <h1>Product</h1>
    </>
  );
};

export default ProductList;
