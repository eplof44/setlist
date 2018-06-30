import React from 'react';
import { Link } from 'react-router-dom';
import ConcertCard from './ConcertCard'
import { getComments } from '../actions/concerts';

const ConcertList = ({ concerts }) => {

  const renderConcerts = concerts.map(concert =>
     <ConcertCard concert={concert}  key={concert.id}/>

  );

  return (

      <div className="container">
        <div className="row">
          {renderConcerts}
        </div>
      </div>

  );
};

export default ConcertList;
