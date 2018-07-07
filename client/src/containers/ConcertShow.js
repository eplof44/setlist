
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttendeeButton from '../components/AttendeeButton';
import CommentForm from './CommentForm';
// import Comment from '../components/Comment';
import { Link } from 'react-router-dom'
import { deleteConcert } from '../actions/concerts';
import { plusAttendee } from '../actions/concerts';
import { editConcert } from '../actions/concerts';
import { getComments } from '../actions/concerts';
import { bindActionCreators } from 'redux';


class ConcertShow extends Component {

  componentDidMount() {
      this.props.getComments(this.props.match.params.concertId);
    }

  handleOnClick = () => {
    this.props.plusAttendee(this.props.concert)
  }

  render() {
    const { concert, comment, deleteConcert, history } = this.props;
    return (
      <div className="container-fluid text-center">
      <h1>{concert.band}</h1>
      <h4>Venue:  {concert.venue} </h4>
      <h4>Tour: {concert.tour}</h4>
      <h4>Date: {concert.date}</h4>
      <h4>Setlist: {concert.song}</h4>
      <h4>Comments</h4>

      <AttendeeButton concert={concert} plusAttendee={this.handleOnClick}/>

      <CommentForm concert={concert} />


      <h5> Mistake in the setlist? Set the 'record' (get it) straight:</h5>
      <Link key={concert.id} to={`/concerts/${concert.id}/edit`}>
      <button type="button">
               Edit Concert
           </button>
           </Link>
           <br/>

      <button onClick={() => deleteConcert(concert.id, history)}>
      <span> Delete </span>
      </button>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.concertId
  const concert = state.concerts.concerts.find(concert => concert.id === id) || {}
  return ({
    concert: concert,
    comments: state.comments.comments
  })
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getComments, deleteConcert, editConcert, plusAttendee
  }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(ConcertShow);
