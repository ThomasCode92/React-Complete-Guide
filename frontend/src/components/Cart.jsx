import { useContext } from 'react';

import Button from './ui/Button';
import Modal from './ui/Modal';

import CartContext from '../contexts/CartContext';
import UserProgressContext from '../contexts/UserProgressContext';
import { currencyFormatter } from '../utils/formatting';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const formattedCartTotal = currencyFormatter.format(cartTotal);

  const isOpen = userProgressCtx.progress === 'cart';

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={isOpen}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formattedCartTotal}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
