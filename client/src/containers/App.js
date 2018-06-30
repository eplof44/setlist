import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import ConcertPage from './ConcertPage';
// import ConcertForm from './ConcertForm';
// import ConcertList from '../components/ConcertList';

import NavBar from '../components/NavBar';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
        <h1> Welcome to Setlist </h1>
        <Route exact path = '/concerts' component = {ConcertPage} />

        <NavBar />
          </div>
      </Router>
    );
  }
}

export default App;
