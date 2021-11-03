import axios from "axios";
import * as types from "./ActionType";
export const FetchAllStart = () => ({
  type: types.FETCH_API_START,
});
export const FetchAllSuccess = (api) => ({
  type: types.FETCH_API_SUCCESS,
  payload: api,
});
export const FetchAllStart = (error) => ({
  type: types.FETCH_API_FAIL,
  payload: error,
});
export const setProduct = () => {
  return function (dispatch) {
    dispatch(FetchAllStart());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const fetchAll = response.data;
        dispatch(FetchAllSuccess(fetchAll));
      })
      .then((error) => {
        dispatch(FetchAllError(error));
      });
  };
};
