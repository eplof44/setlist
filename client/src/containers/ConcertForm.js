import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createConcert } from '../actions/concerts';

//
class ConcertForm extends Component {
}
//
// //
// //   handleOnChange = event => {
// //    const { name, value } = event.target;
// //    const currentConcertFormData = Object.assign({}, this.props.concertFormData, {
// //      [name]: value
// //    })
// //    this.props.updateConcertFormData(currentConcertFormData)
// //  }
// //
// //
// //   handleOnSubmit = event => {
// //     event.preventDefault()
// //     this.props.createConcert(this.props.concertFormData)
// //   }
// //
// //   render() {
// //     const { band, venue, tour, date, song } = this.props.concertFormData
// //     return (
// //
// //       <div>
// //         <h3>Add a New Concert:</h3>
// //         <form onSubmit={this.handleOnSubmit}>
// //
// //           <div>
// //             <label htmlFor="name">Band:</label>
// //             <input
// //               type="text"
// //               onChange={this.handleOnChange}
// //               name="band"
// //               value={band}
// //             />
// //           </div>
// //
// //           <div>
// //             <label htmlFor="venue">Venue:</label>
// //             <input
// //               type="text"
// //               onChange={this.handleOnChange}
// //               name="venue"
// //               value={venue}
// //             />
// //           </div>
// //
// //           <div>
// //             <label htmlFor="date">Venue:</label>
// //             <input
// //               type="date"
// //               onChange={this.handleOnChange}
// //               name="date"
// //               value={date}
// //             />
// //           </div>
// //
// //           <div>
// //             <label htmlFor="song">Setlist:</label>
// //             <input
// //               type="text"
// //               onChange={this.handleOnChange}
// //               name="song"
// //               value={song}
// //             />
// //           </div>
// //
// //           <button type="submit">Add concert</button>
// //
// //         </form>
// //       </div>
// //
// //     )
// //   }
//   }
// //
//
// const mapStateToProps = (state) => {
//   return ({
//     concertFormData: state.concertFormData
//   })
// }
//
export default ConcertForm;
