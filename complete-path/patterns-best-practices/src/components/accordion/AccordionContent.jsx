import { useAccordionContext } from './Accordion';

export default function AccordionContent({ children, id, className }) {
  const { openItemId } = useAccordionContext();

  const classes =
    openItemId === id ? `open ${className ?? ''}` : `close ${className ?? ''}`;

  return <div className={classes}>{children}</div>;
}
