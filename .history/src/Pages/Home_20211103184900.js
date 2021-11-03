import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../Components/ProductList";
import { setProducts } from "../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(setProducts());
  }, []);
  return (
    <>
      <div className="ui grid container">
        {!loading ? (
          <>
            {cart.map((iteM) => {
              return (
                <>
                  <ProductList cart={item} key={item} />
                </>
              );
            })}
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default Home;
