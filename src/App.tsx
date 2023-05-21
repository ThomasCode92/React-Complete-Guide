import React from 'react';

import Post from './components/Post';

function App() {
  return (
    <main>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manual" body="Check out the full course!" />
    </main>
  );
}

export default App;
