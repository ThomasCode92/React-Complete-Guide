import React, { Fragment } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './UI/Modal';

type PostsListProps = {
  modalIsVisible: boolean;
  onCloseModal: () => void;
};

function PostsList({ modalIsVisible, onCloseModal }: PostsListProps) {
  const closeModalHandler = () => {
    onCloseModal();
  };

  return (
    <Fragment>
      {modalIsVisible && (
        <Modal onClose={closeModalHandler}>
          <NewPost onCancel={closeModalHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Max" body="Learn React.js" />
        <Post author="Manual" body="Check out the full course!" />
      </ul>
    </Fragment>
  );
}

export default PostsList;
