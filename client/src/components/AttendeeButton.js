import React, { Component } from 'react';



class AttendeeButton extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.plusAttendee}>
          <span> I Was There! </span>
          <div> {this.props.concert.attendee_count} </div>
          </button>
      </div>
    )
  }
}

export default (AttendeeButton);
