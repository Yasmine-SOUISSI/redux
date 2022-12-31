// action to change name value input field

import { NAME } from "../actionsTypes/nameActionsTypes";

export const changeName = (name) => {
  return {
    type: NAME,
    payload: name,
  };
};
