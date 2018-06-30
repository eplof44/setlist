const initialState = {
  band: '',
  venue: '',
  tour: '',
  date: '',
  song: '',
  attendee_count: 0
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'INPUT_DATA':
    return action.concertFormData;

    case 'RESET_CONCERT_FORM':
    return initialState;

    default:
    return state;
  }
}
