import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../actions/concerts'
import { bindActionCreators } from 'redux';


class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      concert_id: this.props.concert_id

    };
}

  handleChange = event => {
    this.setState({
      content: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createComment, history } = this.props;
    createComment(this.state, history);
  }

  render() {
    return (
      <div className="commentForm">
        <h4>Write a comment</h4>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <textarea
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
