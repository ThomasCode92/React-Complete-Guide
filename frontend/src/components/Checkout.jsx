import { useContext } from 'react';

import Button from './ui/Button';
import Input from './ui/Input';
import Modal from './ui/Modal';

import CartContext from '../contexts/CartContext';
import UserProgressContext from '../contexts/UserProgressContext';

import { currencyFormatter } from '../utils/formatting';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const formattedCartTotal = currencyFormatter.format(cartTotal);

  const isOpen = userProgressCtx.progress === 'checkout';

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={isOpen} onClose={handleCloseCheckout}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {formattedCartTotal}</p>

        <Input id="full-name" label="Full Name" type="text" />
        <Input id="email" label="E-Mail Address" type="email" />
        <Input id="street" label="Street" type="text" />

        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" />
          <Input id="city" label="City" type="text" />
        </div>

        <p className="modal-actions">
          <Button textOnly type="button" onClick={handleCloseCheckout}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
