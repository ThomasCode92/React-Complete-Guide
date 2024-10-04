import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

import Post from '../components/models/Post.model';

type JSONResponse = {
  posts: Post[];
};

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

export async function loader() {
  const response = await fetch('/api/posts');
  const responseData = await response.json();

  return (responseData as JSONResponse).posts;
}

export default Posts;
