import { Link, useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const productId = params.productId;
  return (
    <>
      <h1>ProductDetails: {productId}</h1>
      <Link to="/products">Back</Link>
    </>
  );
};

export default ProductDetails;
