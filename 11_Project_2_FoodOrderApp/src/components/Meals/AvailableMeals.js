import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

import { DUMMY_MEALS } from './dummy-meals';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealItem>
    );
  });

  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
