import { useState } from 'react';

import Answers from './Answers';
import QuestionTimer from './QuestionTimer';

import QUESTIONS from '../questions';

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  let answerState = '';
  let timer = 10000;

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  if (answer.selectedAnswer) timer = 1000;
  if (answer.isCorrect !== null) timer = 2000;

  function handleSelectAnswer(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        mode={answerState}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}