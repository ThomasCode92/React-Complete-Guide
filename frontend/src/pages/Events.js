import React from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
  } else {
    return response;
  }
}

export default EventsPage;
