import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component

import ConcertForm from './ConcertForm';
import ConcertList from '../components/ConcertList';
import ConcertShow from './ConcertShow';

import ConcertPage from './ConcertPage';


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
      <Route exact path = '/concerts/:concertId' component = {ConcertShow} />

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
