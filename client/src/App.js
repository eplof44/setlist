import React, { Component } from 'react';
import Home from "./components/Home";
import ConcertList from "./components/ConcertList";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      < Home />
      < ConcertList />
      </div>
    );
  }
}

export default App;
