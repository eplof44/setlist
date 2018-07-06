import React from 'react';

const Comment = ({comment}) =>
  <p key={comment.id}>
    {comment.content}
  </p>

export default Comment;
