import { NAME } from "../actionsTypes/nameActionsTypes";

// intiale state

const initialState = {
  name: "",
  age: 0,
  email: "",
};

// create reducer function

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
