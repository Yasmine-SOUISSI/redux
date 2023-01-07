// create store with reducers

import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  // comined reducers
  rootReducer,
  // middleware
  composeEnhancers(applyMiddleware(thunk))
  // extension for redux devtools in chrome
);
