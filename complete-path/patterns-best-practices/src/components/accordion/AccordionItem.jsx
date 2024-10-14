import { createContext, useContext } from 'react';

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx)
    throw new Error(
      'AccordionItem compound components cannot be rendered outside the AccordionIem component',
    );

  return ctx;
}

export default function AccordionItem({ className, id, children }) {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
