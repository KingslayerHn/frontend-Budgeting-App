import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alerts from './alert.reducer';
import accounts from './accounts.reducer';
import expenses from './expenses.reducer';

export default combineReducers({
  auth,
  accounts,
  expenses,
  alerts,
});
