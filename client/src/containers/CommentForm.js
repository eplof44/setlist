import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/concerts'
import { bindActionCreators } from 'redux';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const comment = {
      content: this.state.content,
      concert_id: this.props.concert.id
    }
    this.props.createComment(comment)
    this.setState({
      content: ""
    })
  }

  render() {
    return (
      <div className="commentForm">
        <h4>Leave a comment</h4>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <input
              className="commentInputBox"
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
          </div>
          <button type="submit">Post</button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createComment
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentForm);
