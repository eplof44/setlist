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

export const addAttendee = concert => {
  return {
    type: 'ADD_ATTENDEE',
    concert
  }
}

export const updateConcert = concert => {
  return {
    type: 'EDIT_CONCERT',
    concert
  }
}

//Comment Action Creators

export const setComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}

export const addComment = comment => {
  return {
    type:'ADD_COMMENT',
    comment
  }
}

export const removeComment = comment => {
  return {
    type: 'REMOVE_COMMENT',
    concert
  }
}

//concert async actions

export const getConcerts = () => {
  return dispatch => {
    return fetch(`${API_URL}/concerts`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(trails => {
      dispatch(setConcerts(concerts))
    })
    .catch(error => console.log(error));
  }
}


//comments async actions
