export default function MealItem({ meal }) {
  const imgUrl = `http://localhost:3000/${meal.image}`;

  return (
    <li className="meal-item">
      <article>
        <img src={imgUrl} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
