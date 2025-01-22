import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: "You have a new follower!" },
    { id: 2, message: "Someone liked your post!" },
    { id: 3, message: "You have a new message!" },
  ];

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map(notification => (
        <div key={notification.id}>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
