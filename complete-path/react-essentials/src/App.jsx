import { Fragment } from 'react';

import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}
