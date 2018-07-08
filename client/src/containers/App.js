import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ConcertEdit from './ConcertEdit';
import { Link } from 'react-router-dom';
import ConcertForm from './ConcertForm';
import ConcertShow from './ConcertShow';
import ConcertPage from './ConcertPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/NavBar.css';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className="TopNav">
          <h1>Setlist</h1>
          <h3>Keep Track of What Was Played</h3>
        </div>
      <NavBar />
      <Switch>
        <Route exact path = '/concerts/new' component = {ConcertForm} />
        <Route exact path = '/concerts' component = {ConcertPage} />
        <Route exact path = '/concerts/:concertId' component = {ConcertShow} />
        <Route exact path= '/concerts/:concertId/edit' component={ConcertEdit} />
      </Switch>
      <br />
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
