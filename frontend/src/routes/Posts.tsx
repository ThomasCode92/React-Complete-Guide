import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function Posts() {
  return (
    <Fragment>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </Fragment>
  );
}

export default Posts;
