import axios from "axios";

export const signUp = (newUser, navigate) => async (dispatch) => {
  try {
    // check if the user already exists
    const res = await axios.get(
      `http://localhost:3000/users?email=${newUser.email}`
    );
    // if the user already exists, dispatch the action to the reducer
    if (res.status === 200 && res.data.length > 0) {
      dispatch({ type: "SIGN_UP_ERROR", payload: "User already exists" });
    } else {
      // if the user doesn't exist, create a new user
      const res = await axios.post("http://localhost:3000/users", newUser);
      // if the request is successful, dispatch the action to the reducer
      if (res.status === 201) {
        dispatch({ type: "SIGN_UP", payload: res.data });
        navigate("/signin");
      } else {
        dispatch({ type: "SIGN_UP_ERROR", payload: res });
      }
    }
  } catch (error) {
    dispatch({ type: "SIGN_UP_ERROR", payload: error });
  }
};

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    // send get request to the server to get the user
    const res = await axios.get(
      `http://localhost:3000/users?email=${user.email}&&password=${user.password}`
    );
    console.log(res);
    // if the request is successful and user exisy, dispatch the action to the reducer
    if (res.status === 200) {
      if (res.data.length === 0) {
        localStorage.setItem("id", res.data[0].id);
        dispatch({ type: "SIGN_IN_ERROR", payload: "Bad credentials" });
      } else {
        dispatch({ type: "SIGN_IN", payload: res.data });
        // if the user is an admin, navigate to the admin page
        if (res.data[0].type === "admin") {
          navigate("/admin");
        } else {
          // if the user is a normal user, navigate to the home page
          navigate("/");
        }
      }
    } else {
      dispatch({ type: "SIGN_IN_ERROR", payload: "Bad credentials" });
    }
  } catch (error) {
    dispatch({ type: "SIGN_IN_ERROR", payload: error });
  }
};

export const signOut = (navigate, dispatch) => {
  try {
    // dispatch the action to the reducer
    dispatch({ type: "SIGN_OUT", payload: null });
    // remove the token from the local storage to simulate the sign out
    // navigate to the home page
    navigate("/");
  } catch (error) {
    dispatch({ type: "SIGN_OUT_ERROR", payload: error });
  }
};

export const currentUser = () => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:3000/users?id=${localStorage.getItem("id")}`
  );
  if (res.status === 200) {
    dispatch({ type: "CURRENT_USER", payload: res.data });
  }
};
