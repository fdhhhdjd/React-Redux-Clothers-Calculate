import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../Components/ProductList";
import { setProducts } from "../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.data);
  console.log("api", cart);
  useEffect(() => {
    dispatch(setProducts());
  }, []);
  return (
    <>
      <div className="ui grid container">
        <ProductList cart={cart} />
      </div>
    </>
  );
};

export default Home;
