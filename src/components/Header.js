import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const authenticatedUser = (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={() => dispatch(authActions.logout())}>Logout</button>
      </li>
    </ul>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{isAuthenticated && authenticatedUser}</nav>
    </header>
  );
};

export default Header;
