export default (state={comments:[]}, action) => {

  switch (action.type) {
    case 'GET_COMMENTS':
      return {...state, comments: action.comments}

    case 'ADD_COMMENT':
      return {comments: [...state.comments, action.comment]};

    case 'REMOVE_COMMENT':
        return {comments: state.comments.filter(concert => concert.id !== action.comment)};

    default:
      return state;
  }
}
