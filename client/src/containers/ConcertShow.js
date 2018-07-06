
import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component

import AttendeeButton from '../components/AttendeeButton';
import Comments from '../components/Comments';
import CommentForm from './CommentForm';

import { deleteConcert } from '../actions/concerts';
import { plusAttendee } from '../actions/concerts';
import { editConcert } from '../actions/concerts';
import { getComments } from '../actions/concerts';



class ConcertShow extends Component {

  componentDidMount() {
    this.props.getComments(this.props.match.params.concertId);
  }


  handleOnClick = () => {
    this.props.plusAttendee(this.props.concert)
  }

  render() {
    const { concert, deleteConcert, match, history } = this.props;
    return (
      <div className="container-fluid text-center">
          <h1>{concert.band}</h1>

          <h4>Venue:  {concert.band} </h4>

          <h4>Tour: {concert.tour}</h4>

          <h4>Date: {concert.date}</h4>

          <h4>Song: {concert.song}</h4>


            <button onClick={() => deleteConcert(concert.id, history)}>
            <span> Delete </span>
            </button>

            <button onClick={() => editConcert(concert.id, history)}>
            <span> Edit </span>
            </button>

            <AttendeeButton concert={concert} plusAttendee={this.handleOnClick}/>
            <Comments comments={this.props.comments} />

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

  export default connect(mapStateToProps, {getComments, deleteConcert, plusAttendee})(ConcertShow);
