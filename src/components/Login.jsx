import Input from './Input';

import { useInput } from '../hooks/useInput';
import { hasMinLength, isEmail, isNotEmpty } from '../util/validation';

export default function Login() {
  const {
    value: emailValue,
    hasError: emailIsInvalid,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput('', value => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    hasError: passwordIsInvalid,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput('', value => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) return;

    console.log(emailValue, passwordValue);
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
          value={emailValue}
          error={emailIsInvalid && 'Please enter a valid email!'}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          type="password"
          value={passwordValue}
          error={passwordIsInvalid && 'Please enter a valid password!'}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
