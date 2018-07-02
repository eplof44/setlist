import ConcertPage from '../containers/ConcertPage';

import React, { Component } from 'react'

const ConcertList = ({ concerts }) => (
  <div className="concert-list">
    {concerts.map(concert => (
      <div className="concert-list">
        <div className="concert">
          <h2>Concert: {concert.band}</h2>
        </div>
      </div>
      ))}
  </div>
);

ConcertList.defaultProps = {
  concerts: [],
}

export default ConcertList;
