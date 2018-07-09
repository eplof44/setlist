import React from 'react'
import '../styles/Comments.css';

const Comment = ({comments}) => {
  return (
    <div className = "Comments">
  {comments.map(comment => <h4>{comment.content}</h4>)}
    </div>
  );
}
export default Comment;
