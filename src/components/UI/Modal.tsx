import React, { Fragment, ReactNode } from 'react';
import classes from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
};

function Modal({ children }: ModalProps) {
  return (
    <Fragment>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </Fragment>
  );
}

export default Modal;
