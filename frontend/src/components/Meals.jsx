import { useEffect, useState } from 'react';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        // ...
      }

      return await response.json();
    }

    fetchMeals().then(meals => {
      setLoadedMeals(meals);
    });
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map(meal => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
