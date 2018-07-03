import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:3001/api'


//Concert Action Creators


export const setConcerts = concerts => {
  return {
    type: 'GET_CONCERTS',
    concerts
  }
}


const fetchConcertById = (concert) => {

  return {
    type: 'GET_ONE_CONCERT',
    concert: concert
  }
}

export const fetchConcert = (id) => {

  return dispatch => {
    fetch(`${API_URL}/concerts/${id}`, {
      method: "GET",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(concerts => {
      dispatch(fetchConcertById(concerts))
    })
    .catch(error => console.log(error));
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
    comment
  }
}

//concert async actions

export const getConcerts= () => {
  return dispatch => {
    return fetch(`${API_URL}/concerts`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(concerts => {
      dispatch(setConcerts(concerts))
    })
    .catch(error => console.log(error));
  }
}

export const createConcert = (concert, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/concerts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({concert: concert})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(concert => {
      dispatch(addConcert(concert))
      routerHistory.replace(`/concerts/${concert.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/concerts/new');
     })
  }
}

export const editConcert = (concert, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/concerts/${concert.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({concert: concert})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(concert => {
      dispatch(updateConcert(concert))
      routerHistory.replace(`/concerts/${concert.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace('/concerts');
     })
  }
}

export const deleteConcert = (concertId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/concerts/${concertId}`, {
      method: "DELETE",
    })
    .then(response => {
      routerHistory.replace('/concerts');
      dispatch(removeConcert(concertId));
    })
    .catch(error => console.log(error))
  }
}

export const plusAttendee = (concert) => {
  debugger
  return dispatch => {
    return fetch(`${API_URL}/concerts/${concert.id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({concert: Object.assign(...concert, { attendee_count: concert.attendee_count + 1 })})
      })
      .then(response => response.json())
      .then(concert => {

        dispatch(addAttendee(concert))
      })
    .catch(error => console.log(error))
  }
}

//comments async actions
export const getComments = (concertId) => {
  return dispatch => {
    return fetch(`${API_URL}/concerts/${concertId}/comments`, {
      method: "GET",
    })
    .then(res => res.json())
    .then(comments => {
      dispatch(setComments(comments))
    })
    .catch(error => console.log(error));
  }
}




export const createComment = (comment, concert, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/concerts/${comment.concert_id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(comment => {
      dispatch(addComment(comment))
      routerHistory.replace(`/concerts/${concert.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
     })
  }
}


function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
