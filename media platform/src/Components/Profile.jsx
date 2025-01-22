import React, { useState } from "react";

const Profile = () => {
  // State for user profile
  const [user, setUser] = useState({
    name: "Eddie",
    bio: "React Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    postsCount: 10,
    followersCount: 200,
    followingCount: 180,
  });

  // State for editing the profile
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newBio, setNewBio] = useState(user.bio);

  // Handle name and bio updates
  const handleNameChange = (e) => setNewName(e.target.value);
  const handleBioChange = (e) => setNewBio(e.target.value);

  // Save profile changes
  const saveProfile = () => {
    setUser({
      ...user,
      name: newName,
      bio: newBio,
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-header">
        <img className="profile-avatar" src={user.avatar} alt="Avatar" />
        <div className="profile-details">
          {isEditing ? (
            <>
              <div className="edit-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                  className="edit-input"
                />
              </div>
              <div className="edit-field">
                <label htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  value={newBio}
                  onChange={handleBioChange}
                  className="edit-input"
                />
              </div>
              <button onClick={saveProfile}>Save</button>
            </>
          ) : (
            <>
              <div className="profile-info">
                <p><strong>Name: </strong>{user.name}</p>
                <p><strong>Bio: </strong>{user.bio}</p>
              </div>
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            </>
          )}
        </div>
      </div>
      <div className="profile-stats">
        <p>Posts: {user.postsCount}</p>
        <p>Followers: {user.followersCount}</p>
        <p>Following: {user.followingCount}</p>
      </div>
    </div>
  );
};

export default Profile;
