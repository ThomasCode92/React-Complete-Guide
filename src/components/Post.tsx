import React from 'react';

type PostProps = {
  author: string;
  body: string;
};

function Post(props: PostProps) {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
