import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createConcert } from '../actions/concerts';
import { bindActionCreators } from 'redux';
import '../styles/Forms.css';

//
class ConcertForm extends Component {

  constructor() {
    super();

    this.state = {
      band: '' ,
      venue: '' ,
      tour: '',
      date: '',
      song: '',
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
    const { createConcert, history } = this.props;
    createConcert(this.state, history);
  }


  render(){

    return (
      <div>
      <div>  <h2> Add Show: </h2> </div>
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
      placeholder="Songs"
      value={this.state.song}
      onChange={this.handleOnChange}
      />
      </label>


      <br></br>


      <button type="submit">Add Setlist </button>
      </form>
      </div>
    );
  }
}
//associate action with props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createConcert: createConcert,
  }, dispatch);
}


export default connect(null,mapDispatchToProps)(ConcertForm);
