import Model from "./UI/Model";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/Formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./UI/CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userprogressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleCloseCart() {
    userprogressCtx.hideCart();
  }
  function handleGoToCheckout() {
    userprogressCtx.showCheckout();
  }

  return (
    <Model
      className="cart"
      open={userprogressCtx.progress === "cart"}
      onClose={userprogressCtx.progress==="cart" ? handleCloseCart:null}
    >
      <h1>Your Cart</h1>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Model>
  );
};

export default Cart;
