import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, mode, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      console.log('CLEARING TIMEOUT');
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => {
        return prevRemainingTime - 100;
      });
    }, 100);

    return () => {
      console.log('CLEARING INTERVAL');
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-timer"
      className={mode}
      max={timeout}
      value={remainingTime}
    />
  );
}
