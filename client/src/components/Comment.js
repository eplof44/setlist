import React from 'react'

const Comment = (props) =>

        <div key={props.comment.id}> {props.comment.content}</div>


export default Comment;
