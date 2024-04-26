import { Fragment } from 'react';

import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </Fragment>
  );
}
