import { combineReducers } from "redux";
import BasketReducer from "./Reducer";
const rootReducer = combineReducers({
  data: BasketReducer,
});
export default rootReducer;
