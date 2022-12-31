// create store with reducers

import { createStore } from "redux";
import { rootReducer } from "../reducers";
export const store = createStore(
  // comined reducers
  rootReducer,
  // extension for redux devtools in chrome
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
