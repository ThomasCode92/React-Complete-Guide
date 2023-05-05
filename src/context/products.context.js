import React, { createContext, useState } from 'react';

import DUMMY_PRODUCTS from '../products.json';

export const ProductsContext = createContext({
  products: [],
  toggleFav: productId => {},
});

const ProductsProvider = props => {
  const [productsList, setProductsList] = useState(DUMMY_PRODUCTS);

  const toggleFavorite = productId => {
    setProductsList(currentProdList => {
      const prodIndex = currentProdList.findIndex(
        product => product.id === productId
      );

      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];

      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  const value = {
    products: productsList,
    toggleFav: toggleFavorite,
  };

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
