import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My homepage</h1>
      <p>
        Go to{" "}
        <Link to="/products" onClick={navigateHandler}>
          the list of products
        </Link>
      </p>
    </>
  );
};

export default HomePage;
