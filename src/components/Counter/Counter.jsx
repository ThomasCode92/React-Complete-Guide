import { memo, useCallback, useMemo, useState } from 'react';

import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterHistory from './CounterHistory';
import CounterOutput from './CounterOutput';

import isPrime from '../../isPrime.js';
import { log } from '../../log.js';

// Please note that 'memo' is not really necessary here,
// but it's used to demonstrate the concept
const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 100 },
  ]);

  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount],
  );

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0,
  );

  const handleDecrement = useCallback(function handleDecrement() {
    setCounterChanges(prevCounterChanges => [
      { value: -1, id: Math.random() * 100 },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges(prevCounterChanges => [
      { value: 1, id: Math.random() * 100 },
      ...prevCounterChanges,
    ]);
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
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
