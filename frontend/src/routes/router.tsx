import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';
import Posts from './Posts';
import NewPost from './NewPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Posts />,
        children: [{ path: 'create-post', element: <NewPost /> }],
      },
    ],
  },
]);

export default router;
