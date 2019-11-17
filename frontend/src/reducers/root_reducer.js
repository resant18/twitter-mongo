import { combineReducers } from 'redux';
import session from './session_reducer';
import tweets from './tweets_reducer';
import errors from './error_reducer';

const RootReducer = combineReducers({
  session,
  tweets,
  errors
});

export default RootReducer;
