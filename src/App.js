import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Error404 from './containers/Error404';
import Login from './containers/Login';
import Register from './containers/Register';
import setAuthToken from './utils/auth.token';
import store from './redux/store';
import { loadUser } from './redux/actions/auth.action';
import React, { useEffect } from 'react';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Dashboard} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
