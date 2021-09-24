import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alerts from './alert.reducer';
import accounts from './accounts.reducer';
import expenses from './expenses.reducer';
import incomes from './incomes.reducer';
import transferences from './transferences.reducer';
import references from './references.reducer';

export default combineReducers({
  auth,
  accounts,
  expenses,
  incomes,
  transferences,
  references,
  alerts,
});
