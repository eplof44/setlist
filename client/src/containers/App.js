import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ConcertForm from './ConcertForm';
import ConcertList from '../components/ConcertList';
import ConcertPage from '../containers/ConcertPage';
import Venues from '../components/Venues';
import VenuesPage from '../containers/VenuesPage';

// import ConcertForm from './ConcertForm';
// import ConcertList from '../components/ConcertList';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
        <h1> Welcome to Setlist </h1>
        <NavBar />

        <Route exact path = '/concerts/new' component = {ConcertForm} />
        <Route exact path = '/concerts' component = {ConcertPage} />
        <Route exact path = '/venues' component = {VenuesPage} />

  <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
