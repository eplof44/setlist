import React from 'react';
import CommentsList  from './CommentsList'

const Comments = ({ comments }) => {

  const renderComments = comments.comments.map(comment =>
     <CommentsList comment={comment}  key={comment.id}/>
  );

  return (
    <div className="container-fluid text-center" style={{width: 600}}>
      {renderComments}
    </div>
  );
};

export default Comments;
