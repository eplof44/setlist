import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import ConcertCard from '../components/ConcertCard'
import Comments from '../components/Comments'

import CommentForm from './CommentForm'

import { getConcerts } from '../actions/concerts'

class ConcertShow extends Component {


  componentDidMount(){
    this.props.getConcerts()
  }

  render(){
       const { concert } = this.props;

          return(
            <div className="ConcertsContainer">

                <ConcertCard key={concert.id}
                          concert={concert}
                           />
         </div>
     )
   }
  }




const mapStateToProps = (state, ownProps) => {
  const concert = state.concerts.concerts.find(c => c.id === +ownProps.match.params.concertId)
  if (concert) {
    return ({concerts: state.concerts});
  } else {
    return { concert: {} }
  }
};




export default connect(mapStateToProps, { getConcerts })(ConcertShow);
