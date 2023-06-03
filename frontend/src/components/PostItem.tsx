import React from 'react';

import classes from './PostItem.module.css';

type PostProps = {
  author: string;
  body: string;
};

function PostItem(props: PostProps) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default PostItem;
