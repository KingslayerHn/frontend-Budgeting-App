import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alerts from './alert.reducer';

export default combineReducers({
  auth,
  alerts,
});
