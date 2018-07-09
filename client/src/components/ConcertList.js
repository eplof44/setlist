import { Link } from 'react-router-dom';
import React from 'react'
import '../styles/Concerts.css'

const ConcertList = (props) =>
      <div>
          <li><Link key={props.concert.id} to={`/concerts/${props.concert.id}`}>{props.concert.band} on {props.concert.date} at {props.concert.venue}  </Link></li>
      </div>



export default ConcertList;
