import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: 'create-post',
    element: <h1>Create Post</h1>,
  },
]);

export default router;
