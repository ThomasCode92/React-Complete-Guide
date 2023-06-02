import React, { ChangeEvent, Fragment, useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './UI/Modal';

type PostsListProps = {
  modalIsVisible: boolean;
  onCloseModal: () => void;
};

function PostsList({ modalIsVisible, onCloseModal }: PostsListProps) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };

  const closeModalHandler = () => {
    onCloseModal();
  };

  return (
    <Fragment>
      {modalIsVisible && (
        <Modal onClose={closeModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
            onCancel={closeModalHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manual" body="Check out the full course!" />
      </ul>
    </Fragment>
  );
}

export default PostsList;
