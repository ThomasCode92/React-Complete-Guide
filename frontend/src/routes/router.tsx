import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import RootLayout from './RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: 'create-post', element: <h1>Create Post</h1> },
    ],
  },
]);

export default router;
