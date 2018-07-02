import React from 'react';
import { Link } from 'react-router-dom';
import ConcertPage from '../containers/ConcertPage';

const ConcertList = ({ concerts }) => {

  const renderConcerts = concerts.map(concert =>
    <Link key={concert.id} to={`/concerts/${concert.id}`}>
      <div className="ConcertList">
        <h3>{concert.band}</h3>
      </div>
    </Link>
  );

  return (
    <div>
      {renderConcerts}
    </div>
  );
};

export default ConcertList;
