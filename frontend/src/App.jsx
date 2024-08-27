import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Meals from './components/Meals';

import { CartContextProvider } from './contexts/CartContext';
import { UserProgressContextProvider } from './contexts/UserProgressContext';

export default function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
