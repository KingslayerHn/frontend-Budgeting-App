import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alerts from './alert.reducer';
import accounts from './accounts.reducer';
import expenses from './expenses.reducer';
import incomes from './incomes.reducer';
import transferences from './transferences.reducer';
import references from './references.reducer';
import ui from './ui.reducer';
import notifications from './notifications.reducer';
import stadistics from './stadistics.reducer';
import search from './search.reducer';
import friends from './friends.reducer';

export default combineReducers({
  auth,
  accounts,
  expenses,
  incomes,
  transferences,
  references,
  notifications,
  stadistics,
  friends,
  search,
  ui,
  alerts,
});
