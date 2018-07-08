import React from 'react';
import { Link } from 'react-router-dom';
import ConcertList from './ConcertList';


const Concerts= ({ concerts }) => {
  const orderConcerts = concerts.concerts.sort( function( a, b ) {
      return a.band.toLowerCase().localeCompare(b.band.toLowerCase());
        })
  const renderConcerts = orderConcerts.map(concert =>
     <ConcertList concert={concert}  key={concert.id}/>

  );

let randomShow = concerts.concerts[Math.floor(Math.random() * concerts.concerts.length)];
let id = randomShow ? randomShow.id : 1

return (
  <div>
    <div className="container-fluid text-center">
    <h2> Concerts </h2>

    <div className="row">
          {renderConcerts}
        </div>
    </div>

    <div className="container">
    <Link to={`/concerts/${id}`}>
      <button>
        Suggest a Show For Me
      </button>
    </Link>
    </div>
  </div>
);
};

export default Concerts;
