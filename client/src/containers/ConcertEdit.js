
import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import { editConcert } from '../actions/concerts';
import { bindActionCreators } from 'redux';

class ConcertEdit extends Component {

  constructor(props) {
      super(props);
      this.state = {
        id: this.props.concert.id,
        band: this.props.concert.band,
        venue: this.props.concert.venue,
        tour: this.props.concert.tour,
        date: this.props.concert.date,
        song: this.props.concert.song
      };
      this.handleOnChange = this.handleOnChange.bind(this)
      this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }



  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleOnSubmit = event => {
      event.preventDefault();
      const { editConcert, history } = this.props;
      editConcert(this.state, history);
    }

  render(){
   return (
     <div>
     <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
     <label>
     Band: <br></br>
     <input
     className="form-control"
     type="text"
     name="band"
     placeholder="Band"
     value={this.state.band}
     onChange={this.handleOnChange}
     />
     </label> <br></br>
     <label>
     Venue: <br></br>
     <input
     className="form-control"
     type="text"
     name="venue"
     placeholder="Venue"
     value={this.state.venue}
     onChange={this.handleOnChange}
     />
     </label><br></br>
     <label>
     Tour: <br></br>
     <input
     className="form-control"
     type="text"
     name="tour"
     placeholder="Tour"
     value={this.state.tour}
     onChange={this.handleOnChange}
     />
     </label><br></br>


     <label>
     Date: <br></br>
     <input
     className="form-control"
     type="date"
     name="date"
     placeholder="Date"
     value={this.state.date}
     onChange={this.handleOnChange}
     />
     </label><br></br>


     <label>
     Setlist: <br></br>
     <textarea
     className="form-control"
     type="text"
     name="song"
     placeholder="Setlist"
     value={this.state.song}
     onChange={this.handleOnChange}
     />
     </label>


     <br></br>


     <button type="submit">Update Setlist </button>
     </form>
     </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const concert = state.concerts.concerts.find(concert => concert.id === parseInt(ownProps.match.params.concertId, 10));

  if (concert) {
    return {concert: concert}
  } else {
  return { concert: {}};
  }
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editConcert: editConcert
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConcertEdit);
