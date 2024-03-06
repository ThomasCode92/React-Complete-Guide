import { Fragment } from 'react';

export default function Tabs({ children, buttons }) {
  return (
    <Fragment>
      <menu>{buttons}</menu>
      {children}
    </Fragment>
  );
}
