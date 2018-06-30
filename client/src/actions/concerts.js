import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:3001/api'


//Concert Action Creators


export const setConcerts = concerts => {
  return {
    type: 'GET_CONCERTS',
    concerts
  }
}


export const addConcert = concert => {
  return {
    type:'ADD_CONCERT',
    concert
  }
}

export const removeConcert = concert => {
  return {
    type: 'REMOVE_CONCERT',
    concert
  }
}


add attendee

update


//Comment Action Creators
get

add

delete
