import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from '../components/layout/MainHeader';

function RootLayout() {
  return (
    <Fragment>
      <MainHeader />
      <Outlet />
    </Fragment>
  );
}

export default RootLayout;
