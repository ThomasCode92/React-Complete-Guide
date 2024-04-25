import { Fragment, useState } from 'react';

import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';

const INITIAL_USER_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT);

  function handleChange(inputIdentifier, value) {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      [inputIdentifier]: Number(value),
    }));
  }

  const inputIsValid = userInput.duration > 0;

  return (
    <Fragment>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
    </Fragment>
  );
}
