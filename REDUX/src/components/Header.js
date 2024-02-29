import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/auth";
const Header = () => {
  const isAuthentication = useSelector((state) => state.auth.isAuthentication);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthentication ? (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>logout</button>
            </li>
          </ul>
        </nav>
      ) : undefined}
    </header>
  );
};

export default Header;
