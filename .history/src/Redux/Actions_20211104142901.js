import axios from "axios";
import * as types from "./ActionType";
export const FetchAllStart = () => ({
  type: types.FETCH_API_START,
});
export const FetchAllSuccess = (api) => ({
  type: types.FETCH_API_SUCCESS,
  payload: api,
});
export const FetchAllFail = (error) => ({
  type: types.FETCH_API_FAIL,
  payload: error,
});

export const loadCurrentItem = (item) => {
  return {
    type: types.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
export const addToCart = (itemID) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: types.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const setProducts = () => {
  return function (dispatch) {
    dispatch(FetchAllStart());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(FetchAllSuccess(response.data));
      })
      .catch((error) => {
        dispatch(FetchAllFail(error));
      });
  };
};
