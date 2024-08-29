import MealItem from './MealItem';

import useHttp from '../hooks/useHttp';

export default function Meals() {
  const { data, isLoading } = useHttp('http://localhost:3000/meals');

  if (isLoading) return <p>Fetching meals...</p>;

  return (
    <ul id="meals">
      {data && data.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
