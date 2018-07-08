import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import Concerts from '../components/Concerts';
import ConcertForm from './ConcertForm';
import { getConcerts } from '../actions/concerts';
import { bindActionCreators } from 'redux';

class ConcertPage extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

render() {
  const { match, concerts } = this.props;
  return(
    <div>
      <Switch>
        <Route exact path={`${match.url}`} render={() => <Concerts concerts={concerts} />} />
      </Switch>
    </div>
  );
}
};


const mapStateToProps = (state) => {
  return ({
    concerts: state.concerts
  });
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getConcerts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcertPage);
