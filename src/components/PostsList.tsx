import React, { ChangeEvent, Fragment, useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './UI/Modal';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <Fragment>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
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
