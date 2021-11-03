import React from "react";
const Header = () => {
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Build Shop React-Redux</h2>
        </div>
        <div>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
        </div>
      </div>
    </>
  );
};

export default Header;