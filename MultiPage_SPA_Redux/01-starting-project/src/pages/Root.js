import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />

      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
