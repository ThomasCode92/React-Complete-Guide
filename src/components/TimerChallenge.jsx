import { useRef, useState } from 'react';

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
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerExpired && <p>You lost!</p>}
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
  );
}
