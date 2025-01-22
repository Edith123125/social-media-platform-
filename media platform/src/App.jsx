import React from 'react';
import Profile from "./Components/Profile";
import NewsFeed from './Components/NewsFeed';
import Notifications from './Components/Notifications';

const App = () => {
  const posts = [
    {
      content: "Learning React is awesome!",
      comments: [
        { id: 1, text: "Great post!" },
        { id: 2, text: "React is amazing!" },
      ],
    },
    {
      content: "Just finished a project!",
      comments: [
        { id: 1, text: "Great post!" },
        { id: 2, text: "React is amazing!" },
      ],
    },
    {
      content: "Can't wait for the next React update!",
      comments: [
        { id: 1, text: "Great post!" },
        { id: 2, text: "React is amazing!" },
      ],
    },
  ];

  const notifications = [
    "You have a new follower!",
    "Someone liked your post!",
    "You have a new message!",
  ];

  return (
    <div>
      <Profile name="Eddie" bio="React Enthusiast" />
      <NewsFeed posts={posts} />
      <Notifications notifications={notifications} />
    </div>
  );
};

export default App;
