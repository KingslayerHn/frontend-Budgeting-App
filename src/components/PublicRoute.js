import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { auth } = useSelector((state) => state);
  return (
    <Route
      component={(props) =>
        !auth.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    />
  );
};

export default PublicRoute;
