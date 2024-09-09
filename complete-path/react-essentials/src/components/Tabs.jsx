import { Fragment } from 'react';

export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
  return (
    <Fragment>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </Fragment>
  );
}
