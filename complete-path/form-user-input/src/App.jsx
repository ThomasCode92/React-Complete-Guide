import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
        <hr style={{ width: '80%' }} />
        <Signup />
      </main>
    </>
  );
}
