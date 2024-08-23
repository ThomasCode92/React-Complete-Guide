import { useContext } from 'react';

import Button from './ui/Button';

import CartContext from '../contexts/CartContext';

import logoImg from '../assets/logo.jpg';

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
