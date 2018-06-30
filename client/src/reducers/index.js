import { combineReducers } from 'redux';
import concertsReducer from './concertsReducer';
import concertFormData from './concertFormData';
import commentsReducer from './commentsReducer';

export default combineReducers({
  concerts: concertFormData,
  concerts: concertsReducer,
  comments: commentsReducer
});
