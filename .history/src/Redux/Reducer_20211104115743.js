import * as types from "./ActionType";
const initialState = {
  cart: [],
  carts: [],
  loading: false,
  error: null,
  currentItem: null,
};
const BasketReducer = (state = initialState, action) => {
  const { type, payload } = action;
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
    case types.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case types.ADD_TO_CART:
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.carts.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        carts: inCart
          ? state.carts.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.carts, { ...item, qty: 1 }],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
export default BasketReducer;
