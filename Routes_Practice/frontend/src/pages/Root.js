import { Outlet, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigate.state === "loading" && <p>loading</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
