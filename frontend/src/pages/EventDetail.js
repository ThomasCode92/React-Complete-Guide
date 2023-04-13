import React, { Fragment, Suspense } from 'react';
import { Await, defer, redirect, useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

import { getAuthToken } from '../util/auth';

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  const { events, event } = data;

  return (
    <Fragment>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </Fragment>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      status: 500,
    });
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
}

async function loadEvent(eventId) {
  const response = await fetch('http://localhost:8080/events/' + eventId);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: 'Could not fetch details for selected event.',
      }),
      { status: 500 }
    );
  } else {
    const responseData = await response.json();
    return responseData.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;

  return defer({
    events: loadEvents(),
    event: await loadEvent(id),
  });
}

export async function action({ request, params }) {
  const id = params.eventId;
  const token = getAuthToken();

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
    headers: { Authorization: 'Bearer ' + token },
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
      status: 500,
    });
  } else {
    return redirect('/events');
  }
}

export default EventDetailPage;
