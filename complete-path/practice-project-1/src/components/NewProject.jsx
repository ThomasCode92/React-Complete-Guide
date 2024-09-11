import { Fragment, useRef } from 'react';

import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAddProject, onCancel }) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();
  const modalRef = useRef();

  function handleSave() {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDueDate = dueDateInputRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      return modalRef.current.open();
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <Fragment>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="my-4 text-xl text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleInputRef} type="text" label="Title" />
          <Input ref={descriptionInputRef} label="Description" textarea />
          <Input ref={dueDateInputRef} type="date" label="Due Date" />
        </div>
      </div>
    </Fragment>
  );
}
