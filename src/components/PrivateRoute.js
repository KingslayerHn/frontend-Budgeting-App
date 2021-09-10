import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useSelector((state) => state);
  return (
    <Route
      component={(props) =>
        auth.isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
