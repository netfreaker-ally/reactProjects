import useFetch from "../hooks/useFetch";
import { fetchMeals } from "../http";
import MealItem from "./MealItem";

const Meals = () => {
  const {
    fetchedData: loadedMeals,
    isLoading,
    haserror,
  } = useFetch(fetchMeals);

  return (
    <>
      {isLoading && <p className="center">Loding....</p>}
      {haserror && <p>{haserror.message}</p>}

      {loadedMeals && (
        <ul id="meals">
          {loadedMeals.map((meal) => (
            <li key={meal.id}>
              <MealItem meal={meal} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Meals;
