
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { getConcerts } from '../actions/concerts';
import ConcertCard from '../components/ConcertCard';
import ConcertList from '../components/ConcertList';
import ConcertForm from './ConcertForm';

class ConcertPage extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    const { match, concerts } = this.props;

    return (
      <div className="ConcertsContainer">
        <ConcertList concerts={concerts} />
        <Switch>
          <Route path={`${match.url}/new`} component={ConcertForm} />
          <Route path={`${match.url}/:concertId`} component={ConcertCard}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getConcerts: getConcerts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertPage);
