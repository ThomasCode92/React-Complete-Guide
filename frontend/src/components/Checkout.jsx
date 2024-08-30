import { Fragment, useContext } from 'react';

import Error from './Error';
import Button from './ui/Button';
import Input from './ui/Input';
import Modal from './ui/Modal';

import CartContext from '../contexts/CartContext';
import UserProgressContext from '../contexts/UserProgressContext';
import useHttp from '../hooks/useHttp';

import { currencyFormatter } from '../utils/formatting';

const requestConfig = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    'http://localhost:3000/orders',
    requestConfig,
  );

  const cartTotal = cartCtx.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const formattedCartTotal = currencyFormatter.format(cartTotal);

  const isOpen = userProgressCtx.progress === 'checkout';

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    const order = { items: cartCtx.items, customer: customerData };

    sendRequest({ order });
  }

  function handleCloseCheckout() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    clearData();
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
  }

  let actions = (
    <Fragment>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </Fragment>
  );

  if (isLoading) actions = <span>Sending order data...</span>;

  if (data && !error) {
    return (
      <Modal open={isOpen} onClose={handleFinish}>
        <h2>Success</h2>
        <p>Your order was submitted successfully!</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={isOpen} onClose={handleCloseCheckout}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {formattedCartTotal}</p>

        <Input id="name" label="Full Name" type="text" />
        <Input id="email" label="E-Mail Address" type="email" />
        <Input id="street" label="Street" type="text" />

        <div className="control-row">
          <Input id="postal-code" label="Postal Code" type="text" />
          <Input id="city" label="City" type="text" />
        </div>

        {error && (
          <Error title="Failed to submit order" message={error.message} />
        )}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
