import React from 'react';
import {connect} from 'react-redux';
import CommentForm from '../containers/CommentForm';
import { Link } from 'react-router-dom';


const ConcertCard = ( {concert} ) => {

  return(


    <div>
    <h3>Band: {concert.band}</h3>
    <h3>Venue: {concert.venue}</h3>
    <h3>Tour: {concert.tour}</h3>
    <h3>Date: {concert.date}</h3>
    <h3>Songs: {concert.song}</h3>
    <Link to="/concerts"> Back to all concerts </Link>
  </div>




  )
}

const mapStateToProps = (state, ownProps) => {
    const concert = state.concerts.concerts.find(concert => String(concert.id) === ownProps.match.params.id)
    if (concert) {
      return { concert: concert }
    } else {
      return { concert: {} }
    }
  }

export default connect(mapStateToProps)(ConcertCard);
