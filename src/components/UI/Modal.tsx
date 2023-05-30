import React, { Fragment, ReactNode } from 'react';
import classes from './Modal.module.css';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

function Modal({ onClose, children }: ModalProps) {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </Fragment>
  );
}

export default Modal;
