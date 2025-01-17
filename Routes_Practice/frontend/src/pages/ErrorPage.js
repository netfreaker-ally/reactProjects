import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";
const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occuredss";
  let message = "Something went wrongss";
  if (error.status === 500) {

    message = error.data.message;
  }
  if (error.status === 404) {
 
    title = "Not Found";
    message = "could not find page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
