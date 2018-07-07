import React from 'react'
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component

const Comment = (comment) =>

<div>{comment.content}</div>




export default Comment;
