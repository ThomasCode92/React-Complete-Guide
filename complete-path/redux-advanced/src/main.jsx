import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import store from './store';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));

enableMocking().then(() => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
