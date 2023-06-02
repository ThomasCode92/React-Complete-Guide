import React, { ChangeEvent } from 'react';

import classes from './NewPost.module.css';

type NewPostProps = {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
};

function NewPost(props: NewPostProps) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
