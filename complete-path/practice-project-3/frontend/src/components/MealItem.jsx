import { useContext } from 'react';

import Button from './ui/Button';

import CartContext from '../contexts/CartContext';
import { currencyFormatter } from '../utils/formatting';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  const imgUrl = `http://localhost:3000/${meal.image}`;
  const price = currencyFormatter.format(meal.price);

  function handleAddItemToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={imgUrl} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItemToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
