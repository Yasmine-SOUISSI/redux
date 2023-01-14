import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Redux/actions/authActions";
import RenderIf from "./RenderIf";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.authReducer.token);
  const userType = useSelector((state) => state.authReducer.userType);
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <RenderIf condition={token}>
          {userType === "admin" && (
            <li>
              <Link to='/admin'>Admin Portal</Link>{" "}
            </li>
          )}
        </RenderIf>
        <RenderIf condition={!token}>
          <li>
            <Link to='/signUp'>Sign Up</Link>
          </li>
          <li>
            <Link to='/signIn'>Sign In</Link>
          </li>
        </RenderIf>
      </ul>
      {token && (
        <button onClick={() => dispatch(signOut(navigate, dispatch))}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;
