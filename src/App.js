import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import UserDetails from "./Pages/UserDetails";
import UsersList from "./Pages/UsersList";
import { currentUser } from "./Redux/actions/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser(dispatch));
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<p>Home Page</p>} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/admin' element={<UsersList />} />
        <Route path='/users/:userId' element={<UserDetails />} />
      </Routes>
      <h1>Footer</h1>
    </>
  );
}

export default App;
