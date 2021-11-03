import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions";
import swal from "sweetalert";
const ProductItem = () => {
  const { currentItem } = useSelector((state) => state.data);
  const { image, price, description, title, category } = currentItem;
  const dispatch = useDispatch();
  const addCart = () => {

      dispatch(addToCart(currentItem.id));
      swal({
        title: "Bạn đã thêm vào thành công!",
        text: "Cảm ơn bạn đã ghé thăm mua sản phẩm",
        icon: "success",
      
    
   
  };
  return (
    <>
      <div className="ui grid container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div
                  className="ui vertical animated button"
                  tabIndex="0"
                  onClick={addCart}
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
