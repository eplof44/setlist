import ConcertPage from '../containers/ConcertPage';
import { Link } from 'react-router-dom';


import React from 'react'

const ConcertList = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">

          <Link key={props.concert.id} to={`/concerts/${props.concert.id}`}>{props.concert.band} on {props.concert.date} at {props.concert.venue}  </Link>
        </blockquote>
      </div>

    </div>
  </div>;

export default ConcertList;
