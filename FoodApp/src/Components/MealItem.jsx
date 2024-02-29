import { currencyFormatter } from "../util/Formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`https://tthdnz-3000.csb.app/${meal.image}`}
          alt={meal.name}
        ></img>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </p>
        <p className="meal-item-description">{meal.description}</p>
      </article>
      <p className="meal-item-actions">
        <Button onClick={handleAddMealToCart}>Add To Cart</Button>
      </p>
    </li>
  );
};

export default MealItem;
