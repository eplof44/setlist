import { Link } from 'react-router-dom';
import React from 'react'

const ConcertList = (props) =>

      <div>
          <Link key={props.concert.id} to={`/concerts/${props.concert.id}`}>{props.concert.band} on {props.concert.date} at {props.concert.venue}  </Link>
      </div>



export default ConcertList;
