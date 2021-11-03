import * as types from "./ActionType";
const initialState = {
  cart: [],
  loading: false,
  error: null,
};
const BasketReducer = (state, action) => {
  const [type, payload] = state;
  switch (type) {
    case types.FETCH_API_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    case types.FETCH_API_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
  }
};
export default BasketReducer;
