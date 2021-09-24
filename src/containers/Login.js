import React from 'react';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alerts from '../components/Alert';

const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <LoginForm />
      <Alerts />
    </div>
  );
};

export default Login;
