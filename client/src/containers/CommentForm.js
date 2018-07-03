import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../actions/concerts'
import { getConcerts } from '../actions/concerts'

class CommentForm extends Component {
  constructor(props) {

    super(props);

    this.state = {

      content: "",
      concert_id: this.props.concert_id,
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createComment, history } = this.props;
    createComment(this.state, history);
  }

  render() {

    return(
      <div className="container-fluid create-concert-container">
        <div className="row comment-form">
          <div className="row">
            <div>
              <h2>Leave a Comment!</h2>
              <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <div className="form-group">
                  <input
                  type="text"
                  onChange={(event) => this.handleChange(event)}
                  name="content"
                  value={this.state.title}
                  className="form-control"
                  />

                  <button type="submit" className="btn custom-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-sm-3"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ concerts }, ownProps) => {

  return {
    concert_id: ownProps.match.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createComment: createComment,
    getConcerts: getConcerts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
