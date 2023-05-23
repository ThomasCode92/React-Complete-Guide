import React, { Fragment } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <Fragment>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manual" body="Check out the full course!" />
      </ul>
    </Fragment>
  );
}

export default PostsList;
