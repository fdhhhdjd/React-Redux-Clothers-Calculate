import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
const Header = () => {
  return (
    <>
      <div className="ui container fixed">
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
            <div className="cart__counter">10</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
