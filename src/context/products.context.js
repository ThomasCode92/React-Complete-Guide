import React, { createContext, useState } from 'react';

import DUMMY_PRODUCTS from '../products.json';

export const ProductsContext = createContext({ products: [] });

const ProductsProvider = props => {
  const [productsList, setProductsList] = useState(DUMMY_PRODUCTS);

  const value = {
    products: productsList,
  };

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
