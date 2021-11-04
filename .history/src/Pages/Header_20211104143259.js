import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const { carts } = useSelector((state) => state.data);
  useEffect(() => {
    let count = 0;
    carts.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [carts, cartCount]);
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h2 className="navbar__logo">Redux Shopping Cart</h2>
        </Link>
        <Link to="/cart">
          <div className="navbar__cart">
            <h3 className="cart__title">Cart</h3>
            <img
              className="cart__image"
              src="https://image.flaticon.com/icons/svg/102/102276.svg"
              alt="shopping cart"
            />
            <div className="cart__counter">{cartCount}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
