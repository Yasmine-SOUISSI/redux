import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../Redux/actions/userActions";

const UserDetails = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(getUserById(userId, dispatch));
  }, []);

  return (
    <>
      <h1>User Details</h1>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </>
  );
};

export default UserDetails;
