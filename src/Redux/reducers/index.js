// combine reducers

import { combineReducers } from "redux";

// import reducers
import { nameReducer } from "./nameReducers";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  nameReducer,
  productReducer,
  userReducer,
  authReducer,
});
