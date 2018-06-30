import { combineReducers } from 'redux';
import concertsReducer from './concertsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  concerts: concertsReducer,
  comments: commentsReducer
});
