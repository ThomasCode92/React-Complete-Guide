import { createContext, useReducer } from 'react';

import CartReducer from './cart-reducer';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, {
    items: [],
  });

  function handleAddItemToCart(id) {
    dispatch({ type: 'ADD_ITEM', payload: id });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, amount } });
  }

  const ctxValue = {
    items: state.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
