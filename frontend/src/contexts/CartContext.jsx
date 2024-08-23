import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: _item => {},
  removeItem: _id => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.item.id,
      );

      const updatedItems = [...state.items];

      // update existing item
      if (existingCartItemIndex > -1) {
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // add item to cart
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }

    case 'REMOVE_ITEM':
      //...
      break;
    default:
      return { ...state };
  }
}

export function CartContextProvider({ children }) {
  const [] = useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
