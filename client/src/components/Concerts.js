import React from 'react';
import ConcertList from './ConcertList';


const Concerts = ({ concerts }) => {
  const orderConcerts = concerts.concerts.sort( function( a, b ) {
      return a.band.toLowerCase().localeCompare(b.band.toLowerCase());
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
