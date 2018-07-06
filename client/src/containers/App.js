import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component

import ConcertForm from './ConcertForm';
import ConcertList from '../components/ConcertList';
import ConcertShow from './ConcertShow';

import ConcertPage from './ConcertPage';

import { getConcerts } from '../actions/concerts';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


class App extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    return (
      <Router>
      <div className="App">
      <h1> Welcome to Setlist </h1>
      <NavBar />
      <switch>
      <Route exact path = '/concerts/new' component = {ConcertForm} />
      <Route exact path = '/concerts' component = {ConcertPage} />
      <Route exact path = '/concerts/:concertId' component = {ConcertShow} />

      </switch>

      <Footer />
      </div>
      </Router>
    );
  }
}

export default connect(null, {getConcerts})(App);
