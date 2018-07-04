import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getConcerts } from '../actions/concerts';
import ConcertList from '../components/ConcertList';
import Venues from '../components/Venues';


class ConcertPage extends Component {

    componentDidMount(){
      this.props.getConcerts()
    }

    render() {



   const sortedConcerts = this.props.concerts.concerts.sort( function( a, b ) {
   return a.band.toLowerCase().localeCompare(b.band.toLowerCase());
   })

   return (
     <div className="container-fluid">

       <h1 className="App poke-title">Concerts</h1>


       {sortedConcerts.map(concert =>
         <ConcertList key={concert.id}
                           concert={concert}
                            />)}

       <br />

     </div>
   )
 }

}





  const mapStateToProps = (state) => {

    return ({concerts: state.concerts});

  };


  export default connect(mapStateToProps, { getConcerts })(ConcertPage);
