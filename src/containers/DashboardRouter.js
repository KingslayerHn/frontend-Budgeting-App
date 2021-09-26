import React, { useEffect } from 'react';
import Layout from './DashboardLayout';
import { Route, Switch } from 'react-router-dom';
import Expenses from './Expenses';
import Incomes from './Incomes';
import { connect, useSelector } from 'react-redux';
import Tranferences from './Tranferences';
import Error404 from './Error404';
import { getAccounts } from '../redux/actions/account.action';
import { getExpenses } from '../redux/actions/expenses.action';
import { getIncomes } from '../redux/actions/incomes.action';
import Friends from '../containers/Friends';
import Loader from '../components/Loader';
import Home from './Home';

const DashboardRouter = ({ getAccounts, getExpenses, getIncomes }) => {
  const { userLoaded, token } = useSelector((state) => state.auth);
  useEffect(() => {
    getAccounts();
    getExpenses();
    getIncomes();
  });

  if (token && !userLoaded) {
    return <Loader />;
  }

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/expenses" component={Expenses} />
        <Route path="/incomes" component={Incomes} />
        <Route path="/transfer" component={Tranferences} />
        <Route path="/friends" component={Friends} />
        <Route path="*" component={Error404} />
      </Switch>
    </Layout>
  );
};

export default connect(null, { getAccounts, getExpenses, getIncomes })(
  DashboardRouter
);
