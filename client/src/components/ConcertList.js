import ConcertPage from '../containers/ConcertPage';

import React, { Component } from 'react'

const ConcertList= (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.concert.band}</p>
        </blockquote>
      </div>
    </div>
  </div>;

export default ConcertList;
