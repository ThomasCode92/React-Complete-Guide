import { Fragment } from 'react';

export default function Tabs({ children, buttons, ButtonContainer }) {
  return (
    <Fragment>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </Fragment>
  );
}
