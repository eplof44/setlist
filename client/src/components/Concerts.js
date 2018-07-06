import React from 'react';
import { Link } from 'react-router-dom';
import ConcertList from './ConcertList';
import { getComments } from '../actions/concerts';
import { getConcerts } from '../actions/concerts';

const Concerts= ({ concerts }) => {
  const orderConcerts = concerts.concerts.sort(function(a, b) {
          return a.band- b.band;
        })
  const renderConcerts = orderConcerts.map(concert =>
     <ConcertList concert={concert}  key={concert.id}/>

  );

  return (

      <div className="container">
        <div className="row">
          {renderConcerts}
        </div>
    </div>
  );
};

export default Concerts;
