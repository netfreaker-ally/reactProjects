import { Outlet } from "react-router-dom";
import PageContent from "./PageContent";
const HomePage = () => {
  return (
    <>
      <PageContent title="welcome">
        <p>You can find everything</p>
      </PageContent>
      {/* <main>
        <Outlet />
      </main> */}
    </>
  );
};

export default HomePage;
