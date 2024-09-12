import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
