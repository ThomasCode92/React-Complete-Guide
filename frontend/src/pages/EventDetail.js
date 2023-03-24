import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

function EventDetailPage() {
  const params = useParams();

  return (
    <Fragment>
      <h1>Event Detail</h1>
      <p>Event ID {params.eventId}</p>
    </Fragment>
  );
}

export default EventDetailPage;
