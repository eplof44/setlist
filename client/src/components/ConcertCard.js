import React from 'react';
// import Comments from '../components/Comments'
import ConcertShow from '../containers/ConcertShow';
import CommentForm from '../containers/CommentForm';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const ConcertCard = ( concert ) => {

  return(


    <div>
    <h3>Band: {concert.band}</h3>
    <h3>Venue: {concert.venue}</h3>
    <h3>Tour: {concert.tour}</h3>
    <h3>Date: {concert.date}</h3>
    <h3>Songs: {concert.song}</h3>
    <Route path="/concerts/:id" component={CommentForm} />
  </div>

  // <div>
  //     {concert.comments.map(comment =>
  //       <Comments comment={comment} />
  //     )}
  //     </div>


  )
}

export default ConcertCard;
