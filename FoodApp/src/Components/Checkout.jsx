import Modal from "./UI/Model";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { currencyFormatter } from "../util/Formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Input from "./UI/Input";
const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleClosaCheckout() {
    userProgressCtx.hideCheckOut();
  }
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    console.log(customerData);
    try {
      const result = fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData,
          },
        }),
      });
      [];

      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while processing your order. Please try again." +
          error.message
      );
    }
  }
  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={handleClosaCheckout}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>TotalAmount :{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="buttton" onClick={handleClosaCheckout}>
            Close
          </Button>
          <Button>Submit</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
