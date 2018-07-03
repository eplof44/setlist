import React from 'react';

const Comment = ({comment}) => {

  return (
    <div className="comment-card">

      <h6>{comment.content}</h6>

    </div>
  )
}

export default Comment;
