import ConcertPage from '../containers/ConcertPage';
import { Link } from 'react-router-dom';
import ConcertShow from '../containers/ConcertShow';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react'

const ConcertList = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <Link key={props.concert.id} to={`/concerts/${props.concert.id}`}>{props.concert.band}  </Link> {props.concert.date}
        </blockquote>
      </div>

    </div>
  </div>;

export default ConcertList;
