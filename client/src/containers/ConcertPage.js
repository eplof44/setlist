import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import ConcertList from '../components/ConcertList';
import ConcertCard from '../components/ConcertCard';
import { addAttendee } from '../actions';
import { removeConcert } from '../actions';
import { editConcert } from '../actions';
import { Link } from 'react-router-dom';


class ConcertPage extends Component {

  render() {
    const { concerts, match } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <ConcertList concerts={concerts} />
          )}/>
          <Route  path={`${match.url}/new`} component={ConcertForm} />
          <Route exact path={`${match.url}/:concertId`} component={ConcertCard}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    concerts: state.concerts
  });
}

export default connect(mapStateToProps, {addAttendee})(ConcertPage);
