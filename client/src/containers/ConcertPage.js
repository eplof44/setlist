import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import Concerts from '../components/Concerts';
import ConcertShow from './ConcertShow';
import ConcertForm from './ConcertForm';
import ConcertEdit from './ConcertEdit';
import { Link } from 'react-router-dom';
import { getConcerts } from '../actions/concerts';

class ConcertPage extends Component {

  componentDidMount() {
    this.props.getConcerts()
  }

  render() {
    const { concerts, match } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <Concerts concerts={concerts} />
          )}/>

          <Route  path={`${match.url}/new`} component={ConcertForm} />
          // <Route exact path={`${match.url}/:concertId/edit`} component={ConcertEdit}/>
          <Route exact path={`${match.url}/:concertlId`} component = {ConcertShow} />

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

export default connect(mapStateToProps,{getConcerts})(ConcertPage);
