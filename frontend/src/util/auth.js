import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationData = localStorage.getItem('expiration');
  const expirationData = new Date(storedExpirationData);
  const now = new Date();

  const duration = expirationData.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  const tokenDuration = getTokenDuration();

  if (!token) return null;

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}
