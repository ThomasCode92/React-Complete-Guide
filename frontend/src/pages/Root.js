import React, { Fragment, useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) return;

    setTimeout(() => {
      submit(null, { action: '/auth/logout', method: 'post' });
    }, 60 * 60 * 1000);
  }, [submit, token]);

  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;
