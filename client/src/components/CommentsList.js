import React from 'react';
import Comment from './Comment'

const CommentsList = ({ comments }) => {

let order = comments.sort(function(a,b){
  return new Date(b.created_at) - new Date(a.created_at);
});

  const renderComments = order.map(comment =>
     <Comment comment={comment}  key={comment.id}/>
  );

  return (
    <div className="container-fluid text-center" style={{width: 600}}>
      {renderComments}
    </div>
  );
};

export default CommentsList;
