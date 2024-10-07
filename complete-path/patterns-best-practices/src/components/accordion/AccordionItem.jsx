import { useAccordionContext } from './Accordion';

export default function AccordionItem({ id, title, className, children }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;
  console.log(isOpen);

  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 className="accordion-item-title" onClick={handleClick}>
        {title}
      </h3>
      <div className={`accordion-item-content ${isOpen ? 'open' : undefined}`}>
        {children}
      </div>
    </li>
  );
}
