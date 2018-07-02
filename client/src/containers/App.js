import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ConcertForm from './ConcertForm';
import ConcertList from '../components/ConcertList';
import ConcertPage from '../containers/ConcertPage';

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
        <Route exact path = '/concerts' component = {ConcertList} />
  <Footer />
          </div>
      </Router>
    );
  }
}

export default App;
