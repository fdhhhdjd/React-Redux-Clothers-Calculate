import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = () => {
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state.data);
  const current = currentItem;
  return (
    <>
      <div>ok</div>
    </>
  );
};

export default ProductItem;
