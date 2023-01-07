import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addUser, deleteUser, getUsers } from "../Redux/actions/userActions";

function UsersList() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsers(dispatch));
  }, []);

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => dispatch(deleteUser(user.id, dispatch))}>
              Delete User
            </button>
            <Link to={`/users/${user.id}`}>
              <button>Details</button>
            </Link>
          </div>
        );
      })}

      <input type='text' name='name' onChange={handleChanges} />
      <input type='email' name='email' onChange={handleChanges} />

      <button
        onClick={() => {
          dispatch(addUser(user, dispatch));
        }}
      >
        Add User
      </button>
    </>
  );
}

export default UsersList;
