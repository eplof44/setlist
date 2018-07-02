import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createConcert } from '../actions/concerts';

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
                     Songs: <br></br>
                       <input
                         className="form-control"
                         type="text"
                         name="song"
                         placeholder="Setlist"
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







export default ConcertForm;
