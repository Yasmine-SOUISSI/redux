// action to change name value input field
import axios from "axios";
export const getUsers = () => async (dispatch) => {
  {
    try {
      const response = await axios.get(" http://localhost:3000/users");
      if (response.status === 200) {
        dispatch({ type: "GET_USERS", payload: response.data });
      } else {
        dispatch({ type: "GET_USERS_ERROR", payload: response });
      }
    } catch (error) {
      dispatch({ type: "GET_USERS_ERROR", payload: error });
    }
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(" http://localhost:3000/users", user);
    if (response.status === 201) {
      dispatch({ type: "ADD_USER", payload: response.data });
    } else {
      dispatch({ type: "ADD_USER_ERROR", payload: response });
    }
  } catch (error) {
    dispatch({ type: "ADD_USER_ERROR", payload: error });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    if (response.status === 200) {
      dispatch({ type: "DELETE_USER", payload: id });
    } else {
      dispatch({ type: "DELETE_USER_ERROR", payload: null });
    }
  } catch (error) {
    dispatch({ type: "DELETE_USER_ERROR", payload: error });
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    if (response.status === 200) {
      dispatch({ type: "GET_USER_BY_ID", payload: response.data });
    } else {
      dispatch({ type: "GET_USER_BY_ID_ERROR", payload: response });
    }
  } catch (error) {
    dispatch({ type: "GET_USER_BY_ID_ERROR", payload: error });
  }
};
