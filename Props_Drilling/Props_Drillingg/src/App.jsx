import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import CardContextProvider from "./store/Shopping-cart-context.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
function App() {
  return (
    <CardContextProvider >
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CardContextProvider>
  );
}

export default App;
