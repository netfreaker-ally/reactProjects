import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
];
const Products = () => {
  return (
    <>
      <h1>The Products pages</h1>

      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    
    </>
  );
};

export default Products;
