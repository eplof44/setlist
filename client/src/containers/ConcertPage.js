import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getConcerts } from '../actions/concerts';
import ConcertList from '../components/ConcertList';


class ConcertPage extends Component {

    componentDidMount(){
      this.props.getConcerts()
    }


    render(){
      return(
        <div className="App-header">
          <h1> Concerts </h1>
           {this.props.concerts.map(concert =>
            <ConcertList key={concert.id} concert={concert}/>)}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return({
      concerts: state.concerts
    })
  }
  export default connect(mapStateToProps, {getConcerts})(ConcertPage);
