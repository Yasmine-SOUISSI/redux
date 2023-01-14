import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Redux/actions/authActions";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.authReducer.error);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(signIn(user, navigate, dispatch));
  };
  return (
    <>
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
        Sign In
      </button>
      {error && <p>{error}</p>}
    </>
  );
};

export default SignIn;
