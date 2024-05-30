import { useRef } from 'react';

import Input from './Input';

export default function NewProject({ onAddProject }) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();

  function handleSave() {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDueDate = dueDateInputRef.current.value;

    // validation

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
