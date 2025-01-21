import React, { useState } from 'react'; 
import Comment from "./Comments";  


const Post = ({ content }) => {
  const [comments, setComments] = useState([
  
   
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      const newCommentObject = {
        id: comments.length + 1,
        text: newComment,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };

  return (
    <div>
      <p>{content}</p>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} text={comment.text} />
        ))}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
