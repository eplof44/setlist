import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { getConcerts } from '../actions/concerts';


import ConcertList from '../components/ConcertList';

class ConcertPage extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    const { concerts } = this.props;

    return (
      <div>
        <ConcertList concerts={concerts} />
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
