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

export const loadCurrentItem = (item) => ({
  type: types.LOAD_CURRENT_ITEM,
  payload: item,
});

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
