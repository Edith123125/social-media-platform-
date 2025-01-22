import React from 'react';
import Post from './Post';  

const NewsFeed = () => {
  const posts = [
    { id: 1, content: "Learning React is awesome!" },
    { id: 2, content: "props and states are just amazing!" },
    { id: 3, content: "Oooh Usestate turns out to be my best!" },
  ];

  return (
    <div>
      <h2>NewsFeed</h2>
      {posts.map(post => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
};

export default NewsFeed;
