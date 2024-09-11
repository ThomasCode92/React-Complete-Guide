import Error from './Error.jsx';
import Places from './Places.jsx';

import { useFetch } from '../hooks/useFetch.js';
import { fetchAvailablePlaces } from '../http.js';
import { sortPlacesByDistance } from '../loc.js';

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(position => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude,
      );

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    fetchedData: availablePlaces,
    isFetching,
    error,
  } = useFetch(fetchSortedPlaces, []);

  if (error)
    return <Error title="An error occurred!" message={error.message} />;

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}