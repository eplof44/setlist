export default (state={concerts:[]}, action) => {
  let concert;

  switch (action.type) {

    case 'GET_CONCERTS':
    return {...state, concerts: action.concerts}

    case 'ADD_CONCERT':
    return {concerts: [...state.concerts, action.concert]};

    case 'REMOVE_CONCERT':
    return {concerts: state.concerts.filter(concert => concert.id !== action.concert)};

    case 'EDIT_CONCERT':
    state.concerts.map((concert) => {
      if (concert.id === action.concert.id) {
        concert.band = action.concert.band
        concert.venue = action.concert.venue
        concert.tour = action.concert.tour
        concert.date = action.concert.date
        concert.song = action.concert.song
      }
    });
    return {...state, concert: action.concert};

    case 'ADD_ATTENDEE':
      const updatedConcerts = state.concerts.map((concert) => {
        if (concert.id === action.concert.id) {
          return action.concert
        } else {
          return concert
        }
      });
      return {...state,concerts: updatedConcerts, };



       default:
         return state;

}
}
