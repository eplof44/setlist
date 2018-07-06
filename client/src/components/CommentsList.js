import React, {Component} from 'react';

const CommentList = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">

        {props.comment.content}
        </blockquote>
      </div>

    </div>
  </div>;

export default CommentList;
