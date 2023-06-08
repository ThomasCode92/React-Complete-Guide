import React, { Fragment } from 'react';
import { useLoaderData } from 'react-router-dom';

import PostItem from './PostItem';
import classes from './PostsList.module.css';

import { loader } from '../routes/Posts';

function PostsList() {
  const posts = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <Fragment>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => (
            <PostItem
              key={post.id}
              id={post.id}
              body={post.body}
              author={post.author}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </Fragment>
  );
}

export default PostsList;
