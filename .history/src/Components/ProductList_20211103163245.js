import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadCurrentItem } from "../Redux/Actions";
const ProductList = ({ cart }) => {
  const { id, title, image, price, category } = cart;
  const dispatch = useDispatch();
  //   const { cart } = useSelector((state) => state.data);
  const handleItem = () => {
    dispatch(loadCurrentItem(cart));
  };
  return (
    <>
      <h1>Xin chao </h1>
    </>
  );
};

export default ProductList;
