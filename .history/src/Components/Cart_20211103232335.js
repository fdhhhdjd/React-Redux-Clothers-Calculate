import { useSelector } from "react-redux";

const Cart = () => {
  const { carts } = useSelector((state) => state.data);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          {carts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Cart Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span>
          </div>
          <button className={styles.summary__checkoutBtn}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
