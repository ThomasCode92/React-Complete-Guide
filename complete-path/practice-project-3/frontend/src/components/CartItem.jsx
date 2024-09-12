import { currencyFormatter } from '../utils/formatting';

export default function CartItem({ item, onIncrease, onDecrease }) {
  const formattedPrice = currencyFormatter.format(item.price);

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} - {formattedPrice}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>QTY</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
