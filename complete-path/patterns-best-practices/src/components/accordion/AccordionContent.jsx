import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export default function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionContext();
  const { id } = useAccordionItemContext();

  const classes =
    openItemId === id ? `open ${className ?? ''}` : `close ${className ?? ''}`;

  return <div className={classes}>{children}</div>;
}
