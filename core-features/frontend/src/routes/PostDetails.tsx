import React from 'react';
import { useLoaderData, Link, LoaderFunctionArgs } from 'react-router-dom';

import Modal from '../components/UI/Modal';
import classes from './PostDetails.module.css';
import Post from '../components/models/Post.model';

type JSONResponse = {
  post: Post;
};

function PostDetails() {
  const post = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const postId = params.postId;
  const response = await fetch('/api/posts/' + postId);
  const responseData = await response.json();

  return (responseData as JSONResponse).post;
}

export default PostDetails;
