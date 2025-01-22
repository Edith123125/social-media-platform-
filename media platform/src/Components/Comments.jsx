import React, { useState } from "react";

const Comment = ({ text, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEditChange = (e) => setNewText(e.target.value);

  const handleSaveEdit = () => {
    onEdit(newText);
    setIsEditing(false);
  };

  return (
    <div className="comment-container">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={handleEditChange}
            className="comment-input"
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <p>{text}</p>
      )}
      
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
    </div>
  );
};

export default Comment;
