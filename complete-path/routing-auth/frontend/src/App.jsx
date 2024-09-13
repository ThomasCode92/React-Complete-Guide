import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { action as manipulateEventAction } from './components/EventForm';
import AuthenticationPage, {
  action as authAction,
} from './pages/Authentication';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  action as eventDetailAction,
  loader as eventDetailLoader,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import { action as logoutAction } from './pages/Logout';
import NewEventPage from './pages/NewEvent';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import RootLayout from './pages/Root';

import { checkAuthLoader, tokenLoader } from './util/auth';

const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
        children: [{ path: 'logout', action: logoutAction }],
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            id: 'event-detail',
            path: ':eventId',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                loader: checkAuthLoader,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            loader: checkAuthLoader,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
