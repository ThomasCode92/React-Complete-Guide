import React from 'react';

const names = ['Thomas', 'Maximilian'];

function Post() {
  const randomName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{randomName}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}

export default Post;
