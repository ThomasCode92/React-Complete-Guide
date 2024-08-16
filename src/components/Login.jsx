import { useState } from 'react';

import Input from './Input';

import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevState => {
      return { ...prevState, [identifier]: value };
    });
    setDidEdit(prevState => {
      return { ...prevState, [identifier]: false };
    });
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevState => {
      return { ...prevState, [identifier]: true };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          name="email"
          type="email"
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email!'}
          onChange={event => handleInputChange('email', event.target.value)}
          onBlur={() => handleInputBlur('email')}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          type="password"
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password!'}
          onChange={event => handleInputChange('password', event.target.value)}
          onBlur={() => handleInputBlur('password')}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
