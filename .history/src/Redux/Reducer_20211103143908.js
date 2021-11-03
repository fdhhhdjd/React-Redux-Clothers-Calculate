import * as types from "./ActionType"
const initialState = {
  cart: [],
  loading: false,
};
const BasketReducer = (state, action) => {
  const [type, payload] = state;
  switch (type) {
    case types.FETCH_API_START:
      return {
        ...state,
      };
    case :
      break;
    default:
  }
};
