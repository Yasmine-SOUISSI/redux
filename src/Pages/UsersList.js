import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RenderIf from "../Components/RenderIf";
import { addUser, deleteUser, getUsers } from "../Redux/actions/userActions";

function UsersList() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    type: "admin",
  });
  const users = useSelector((state) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsers(dispatch));
  }, []);

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  const userType = useSelector((state) => state.authReducer.userType);
  console.log(userType);
  return (
    <RenderIf condition={userType === "admin"}>
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
      <input type='password' name='password' onChange={handleChanges} />
      <select name='type' onChange={handleChanges}>
        <option value='admin'>Admin</option>
        <option value='user'>User</option>
      </select>

      <button
        onClick={() => {
          dispatch(addUser(user, dispatch));
        }}
      >
        Add User
      </button>
    </RenderIf>
  );
}

export default UsersList;
