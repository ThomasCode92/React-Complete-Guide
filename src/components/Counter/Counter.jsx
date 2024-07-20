import { memo, useCallback, useMemo, useState } from 'react';

import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';

import isPrime from '../../isPrime.js';
import { log } from '../../log.js';

// Please note that 'memo' is not really necessary here,
// but it's used to demonstrate the concept
const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  const [counter, setCounter] = useState(initialCount);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount],
  );

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter(prevCounter => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter(prevCounter => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});

export default Counter;
