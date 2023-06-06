import React, { Fragment, useEffect, useState } from 'react';

import { IPostData } from '../routes/NewPost';
import PostItem from './PostItem';
import classes from './PostsList.module.css';

import Post from './models/Post.model';

type JSONResponse = {
  posts: Post[];
};

function PostsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const responseData: JSONResponse = await response.json();

      setPosts(responseData.posts);
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchPosts();
  }, []);

  const addPostHandler = (postData: IPostData) => {
    const post = new Post(postData.body, postData.author);

    fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });

    setPosts(prevPosts => [...prevPosts, post]);
  };

  return (
    <Fragment>
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => (
            <PostItem key={post.id} body={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )}
    </Fragment>
  );
}

export default PostsList;
