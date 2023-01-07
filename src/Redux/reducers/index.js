// combine reducers

import { combineReducers } from "redux";

// import reducers
import { nameReducer } from "./nameReducers";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  nameReducer,
  productReducer,
  userReducer,
});
