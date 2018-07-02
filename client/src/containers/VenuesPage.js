import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getConcerts } from '../actions/concerts';
import Venues from '../components/Venues';


class VenuesPage extends Component {

    componentDidMount(){
      this.props.getConcerts()
    }

    render(){
         const { concerts } = this.props;

            return(
              <div className="ConcertsContainer">
                {concerts.concerts.map(concert =>
                  <Venues key={concert.id}
                            concert={concert}
                             />)}
           </div>
       )
     }
   }


  const mapStateToProps = (state) => {

    return ({concerts: state.concerts});

  };


  export default connect(mapStateToProps, { getConcerts })(VenuesPage);
