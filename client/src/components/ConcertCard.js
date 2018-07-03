import React from 'react';
import Comments from '../components/Comments'
import ConcertShow from '../containers/ConcertShow';


const ConcertCard = ( props ) => {

  return(

    <div>

          <div className="concert-show-card">
            <h3>Band: {props.concert.band}</h3>
            <h4> Venue: {props.concert.venue}</h4>
            <p>Tour: {props.concert.tour}</p>
            <h6> Date: {props.concert.date}</h6>
            <h6>Songs: {props.concert.songs}</h6>

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
