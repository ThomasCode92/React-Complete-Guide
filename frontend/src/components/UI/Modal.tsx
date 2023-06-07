import React, { Fragment, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('..');
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </Fragment>
  );
}

export default Modal;
