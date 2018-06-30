import React from 'react';
import { Link } from 'react-router-dom';


const ConcertList = ({concerts}) => {

  const renderConcerts = concerts.map(concert =>
  <link key={concert.id} to={`/concerts/${concert.id}`}>
  <div>
    <h2>{concert.band}</h2>
  </div>
  </link>
);

return (
   <div>
     {renderConcerts}
   </div>
 );
};

export default ConcertList;
