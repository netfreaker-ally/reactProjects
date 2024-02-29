import { currencyFormatter } from "../../util/Formatting";
const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="cart-item">
      <p className="cart-item-actions">
        {" "}
        {name}-{quantity}*{currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease} className="">
          -
        </button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
