import React, {Component} from 'react';

class CommentsList extends Component {

  render() {
      const { comment, created_at } = this.props.comment;
      let ts= new Date(created_at);
      let date = ts.toLocaleString()
    return(
        <div> {comment}</div>
    )
  }
}

export default CommentsList;
