import React from 'react';
import Comments from '../components/Comments'
import ConcertShow from '../containers/ConcertShow';
import CommentForm from '../containers/CommentForm';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const ConcertCard = ( props ) => {

  return(

    <div>

          <div className="concert-show-card">
            <h3>Band: {props.concert.band}</h3>
            <h4> Venue: {props.concert.venue}</h4>
            <p>Tour: {props.concert.tour}</p>
            <h6> Date: {props.concert.date}</h6>
            <h6>Songs: {props.concert.song}</h6>
            <Route path="/concerts/:id" component={CommentForm} />

            <div className="comment-container">
              {props.concert.comments.map(comment =>
                <Comments comment={comment} />
              )}
            </div>
          </div>
</div>

)
}

export default ConcertCard;
