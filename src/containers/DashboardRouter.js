import React from 'react';
import Layout from './DashboardLayout';
import { Route, Switch } from 'react-router-dom';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Incomes from './Incomes';
import Tranferences from './Tranferences';
import History from './History';
import Error404 from './Error404';

const DashboardRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Accounts} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/incomes" component={Incomes} />
        <Route path="/transfer" component={Tranferences} />
        <Route path="/history" component={History} />
        <Route path="*" component={Error404} />
      </Switch>
    </Layout>
  );
};

export default DashboardRouter;
