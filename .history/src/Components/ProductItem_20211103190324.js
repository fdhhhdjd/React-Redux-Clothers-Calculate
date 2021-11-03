import React from "react";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const currentItem = useSelector((state) => state.data);
  console.log(currentItem);
  return (
    <>
      <div className="ui grid container">
        {currentItem.map((item) => {
          return (
            <>
              <h1>{item.title}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductItem;
