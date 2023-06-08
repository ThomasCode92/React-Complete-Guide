import React from 'react';

import classes from './PostItem.module.css';
import { Link } from 'react-router-dom';

type PostProps = {
  id: string;
  author: string;
  body: string;
};

function PostItem(props: PostProps) {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </li>
  );
}

export default PostItem;
