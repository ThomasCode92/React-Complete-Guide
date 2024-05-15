import { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setIsTimerExpired(true);
    }, targetTime * 1000);

    setIsTimerStarted(true);
  }

  function handleStop() {
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {isTimerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {isTimerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={isTimerStarted ? 'active' : ''}>
        {isTimerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
