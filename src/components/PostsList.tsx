import React, { Fragment, useState } from 'react';

import NewPost, { IPostData } from './NewPost';
import PostItem from './PostItem';
import classes from './PostsList.module.css';
import Modal from './UI/Modal';

import Post from './models/Post.model';

type PostsListProps = {
  modalIsVisible: boolean;
  onCloseModal: () => void;
};

function PostsList({ modalIsVisible, onCloseModal }: PostsListProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPostHandler = (postData: IPostData) => {
    const post = new Post(postData.body, postData.author);
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
      <ul className={classes.posts}>
        <PostItem author="Max" body="Learn React.js" />
        <PostItem author="Manual" body="Check out the full course!" />
      </ul>
    </Fragment>
  );
}

export default PostsList;
