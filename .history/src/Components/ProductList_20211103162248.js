import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadCurrentItem } from "../Redux/Actions";
const ProductList = ({ cart }) => {
  const { id, title, image, price, category } = cart;
  const dispatch = useDispatch();
  const { currentItem } = useSelector((state) => state.data);
  const handleItem = () => {
    dispatch(loadCurrentItem(currentItem));
  };
  return (
    <>
      <div className="four wide column">
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header" onClick={handleItem}>
                  {title}
                </div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductList;
