import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import UsersList from "./Pages/UsersList";

function App() {
  return (
    <>
      <h1>NavBar</h1>
      <Routes>
        <Route path='/' element={<p>Home Page</p>} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:userId' element={<UserDetails />} />
      </Routes>
      <h1>Footer</h1>
    </>
  );
}

export default App;
