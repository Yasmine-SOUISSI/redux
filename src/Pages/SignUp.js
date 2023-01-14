import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Redux/actions/authActions";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: "user",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.authReducer.error);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(signUp(user, navigate, dispatch));
  };
  return (
    <>
      <input
        type='text'
        placeholder='Name'
        name='name'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={handleChange}
      />
      <button type='submit' onClick={handleSumit}>
        Sign Up
      </button>
      {error && <p>{error}</p>}
    </>
  );
};

export default SignUp;
