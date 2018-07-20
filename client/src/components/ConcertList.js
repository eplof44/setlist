import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increaseLikes } from '../actions/concerts';
import { bindActionCreators } from 'redux';

import '../styles/Concerts.css'



class ConcertList extends Component {


  render() {
    const { concert } = this.props;
    return(

      <div>
      <li><Link key={this.props.concert.id} to={`/concerts/${this.props.concert.id}`}>{this.props.concert.band} on {this.props.concert.date} at {this.props.concert.venue}  </Link></li>
      <button onClick={() => this.props.increaseLikes(this.props.concert)}>
        <span> Like </span>
        <div> {this.props.concert.likes} </div>
      </button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increaseLikes
  }, dispatch);
}


export default connect(null,mapDispatchToProps)(ConcertList);
