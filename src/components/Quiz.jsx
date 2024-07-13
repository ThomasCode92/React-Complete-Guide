import { useCallback, useState } from 'react';

import Question from './Question';

import QUESTIONS from '../questions';

import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
