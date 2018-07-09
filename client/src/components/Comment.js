import React from 'react'

const Comment = ({comments}) => {
  return (
    <div>
  {comments.map(comment => <h4>{comment.content}</h4>)}
    </div>
  );
}
export default Comment;
