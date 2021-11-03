import * as types from "./ActionType";
export const FetchAllStart = () => ({
  type: types.FETCH_API_START,
});
export const FetchAllSucceed = (api) => ({
  type: types.FETCH_API_SUCCESS,
  payload: api,
});
export const FetchAllStart = () => ({
  type: types.FETCH_API_START,
});
