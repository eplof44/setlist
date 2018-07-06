import React from 'react';
import {connect} from 'react-redux';
import CommentForm from '../containers/CommentForm';

// import Comments from './Comments';

// import { addAttendee } from '../actions/concerts';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const ConcertCard = (concert) =>


//call ConcertList

    <div>
    <h3>Band: {concert.band}</h3>
    <h3>Venue: {concert.venue}</h3>
    <h3>Tour: {concert.tour}</h3>
    <h3>Date: {concert.date}</h3>
    <h3>Songs: {concert.song}</h3>

    </div>

    // <div className="comment-container">
    //            {this.props.concert.comments.map(comment =>
    //              <Comments comment={comment} />
    //            )}
    //          </div>
    // <Route path="/concerts/:id" component={CommentForm} />
    //
    // <Link to="/concerts"> Back to all concerts </Link>




const mapStateToProps = (state, ownProps) => {
    const concert = state.concerts.concerts.find(concert => String(concert.id) === ownProps.match.params.id)
    if (concert) {
      return { concert: concert }
    } else {
      return { concert: {} }
    }
  }

export default connect(mapStateToProps, {addAttendee})(ConcertCard);
