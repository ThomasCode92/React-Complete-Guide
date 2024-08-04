import Error from './Error.jsx';
import Places from './Places.jsx';

import { useFetch } from '../hooks/useFetch.js';
import { fetchAvailablePlaces } from '../http.js';
// import { sortPlacesByDistance } from '../loc.js';

// navigator.geolocation.getCurrentPosition(position => {
//   const sortedPlaces = sortPlacesByDistance(
//     places,
//     position.coords.latitude,
//     position.coords.longitude,
//   );

//   setAvailablePlaces(sortedPlaces);
//   setIsFetching(false);
// });

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    fetchedData: availablePlaces,
    setFetchedData: setAvailablePlaces,
    isFetching,
    error,
  } = useFetch(fetchAvailablePlaces, []);

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
