import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout';
import Posts, { loader as postsLoader } from './Posts';
import NewPost, { action as newPostAction } from './NewPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: 'create-post', element: <NewPost />, action: newPostAction },
        ],
      },
    ],
  },
]);

export default router;
