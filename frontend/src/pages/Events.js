import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'e1', title: 'Some Event' },
  { id: 'e2', title: 'Another Event' },
];

function EventsPage() {
  return (
    <Fragment>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default EventsPage;
