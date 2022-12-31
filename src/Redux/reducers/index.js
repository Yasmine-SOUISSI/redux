// combine reducers

import { combineReducers } from "redux";

// import reducers
import { nameReducer } from "./nameReducers";

export const rootReducer = combineReducers({ nameReducer });
