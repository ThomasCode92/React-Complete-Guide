import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      'Accordion compound components cannot be rendered outside the Accordion component',
    );
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  const contextValue = {
    openItemId,
    toggleItem(id) {
      setOpenItemId(prevId => (prevId === id ? null : id));
    },
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
