import React from 'react';
import CommentsList  from './CommentsList'

const Comments = ({ comments }) => {

let order = comments.sort(function(a,b){
  return new Date(b.created_at) - new Date(a.created_at);
});

  const renderComments = order.map(comment =>
     <CommentsList comment={comment}  key={comment.id}/>
  );

  return (
    <div className="container-fluid text-center" style={{width: 600}}>
      {renderComments}
    </div>
  );
};

export default Comments;
