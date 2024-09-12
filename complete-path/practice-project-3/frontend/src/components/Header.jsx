import { useContext } from 'react';

import Button from './ui/Button';

import CartContext from '../contexts/CartContext';
import UserProgressContext from '../contexts/UserProgressContext';

import logoImg from '../assets/logo.jpg';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
