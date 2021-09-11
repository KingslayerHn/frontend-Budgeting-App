import React, { useEffect } from 'react';
import Layout from './DashboardLayout';
import { Route, Switch } from 'react-router-dom';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Incomes from './Incomes';
import { connect } from 'react-redux';
import Tranferences from './Tranferences';
import Error404 from './Error404';
import { getAccounts } from '../redux/actions/account.action';
import { getExpenses } from '../redux/actions/expenses.action';

const DashboardRouter = ({ getAccounts, getExpenses }) => {
  useEffect(() => {
    getAccounts();
    getExpenses();
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Accounts} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/incomes" component={Incomes} />
        <Route path="/transfer" component={Tranferences} />
        <Route path="*" component={Error404} />
      </Switch>
    </Layout>
  );
};

export default connect(null, { getAccounts, getExpenses })(DashboardRouter);
