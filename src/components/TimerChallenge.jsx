import { Fragment, useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const timerRef = useRef();

  function handleStart() {
    timerRef.current = setTimeout(() => {
      setIsTimerExpired(true);
    }, targetTime * 1000);

    setIsTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
  }

  return (
    <Fragment>
      {isTimerExpired && (
        <ResultModal result={'lost'} targetTime={targetTime} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={isTimerStarted ? handleStop : handleStart}>
            {isTimerStarted ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={isTimerStarted ? 'active' : ''}>
          {isTimerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </Fragment>
  );
}
