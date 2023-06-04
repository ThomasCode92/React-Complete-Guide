import React, { Fragment, useEffect, useState } from 'react';

import NewPost, { IPostData } from './NewPost';
import PostItem from './PostItem';
import classes from './PostsList.module.css';
import Modal from './UI/Modal';

import Post from './models/Post.model';

type PostsListProps = {
  modalIsVisible: boolean;
  onCloseModal: () => void;
};

type JSONResponse = {
  posts: Post[];
};

function PostsList({ modalIsVisible, onCloseModal }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const responseData: JSONResponse = await response.json();

      setPosts(responseData.posts);
    }

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

  const closeModalHandler = () => {
    onCloseModal();
  };

  return (
    <Fragment>
      {modalIsVisible && (
        <Modal onClose={closeModalHandler}>
          <NewPost onCancel={closeModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post => (
            <PostItem key={post.id} body={post.body} author={post.author} />
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
