import { useEffect } from 'react';

import { fetchUserPlaces } from '../http';

export default function useFetch() {
  useEffect(() => {
    async function fetchPlaces() {
      try {
        const userPlaces = await fetchUserPlaces();
        setUserPlaces(userPlaces);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch user places.' });
      }
      setIsFetching(false);
    }

    setIsFetching(true);
    fetchPlaces();
  }, []);
}
