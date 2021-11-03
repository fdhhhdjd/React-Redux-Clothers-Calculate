import React from "react";

const ProductItem = () => {
  return (
    <>
      <div className={styles.singleItem}>
        <img
          className={styles.singleItem__image}
          src={current.image}
          alt={current.title}
        />
        <div className={styles.singleItem__details}>
          <p className={styles.details__title}>{current.title}</p>
          <p className={styles.details__description}>{current.description}</p>
          <p className={styles.details__price}>$ {current.price}</p>

          <button onClick={addCart} className={styles.details__addBtn}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
