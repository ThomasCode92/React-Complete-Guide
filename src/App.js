import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} exact="true" />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;
