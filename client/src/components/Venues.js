import VenuesPage from '../containers/VenuesPage';

import React from 'react'

const Venues = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.concert.venue}</p>
        </blockquote>
      </div>
    </div>
  </div>;

export default Venues;
