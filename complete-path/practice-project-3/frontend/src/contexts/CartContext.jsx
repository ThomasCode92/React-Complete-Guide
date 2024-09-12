import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: _item => {},
  removeItem: _id => {},
  clearCart: () => {},
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

    case 'REMOVE_ITEM': {
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.id,
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItems = [...state.items];

      // remove item from cart, if quantity is 1
      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        // reduce quantity of item, if quantity is greater than 1
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return { ...state, items: updatedItems };
    }

    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }

    default:
      return { ...state };
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContext = { items: cart.items, addItem, removeItem, clearCart };
  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
