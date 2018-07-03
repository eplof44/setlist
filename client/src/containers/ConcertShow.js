import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import ConcertCard from '../components/ConcertCard'
import CommentForm from './CommentForm'

import { Link } from 'react-router-dom'
import { getConcerts} from '../actions/concerts'

class ConcertShow extends Component {

    componentDidMount(){
      this.props.getConcerts()
    }

    render(){
         const { concerts } = this.props;

            return(
              <div className="ConcertsContainer">
                {concerts.concerts.map(concert =>
                  <ConcertCard key={concert.id}
                            concert={concert}
                             />)}
           </div>


       )
     }
   }


  const mapStateToProps = (state) => {

    return ({concerts: state.concerts});

  };


  export default connect(mapStateToProps, { getConcerts })(ConcertShow);
