import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.data);

  return (
    <>
      <div className="cart">
        <div className="cart__items">
          {carts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart__summary">
          <h4 className="summary__title">Cart Summary</h4>
          <div className="summary__price">
            {/* <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span> */}
          </div>
          <button className="summary__checkoutBtn">Proceed To Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
