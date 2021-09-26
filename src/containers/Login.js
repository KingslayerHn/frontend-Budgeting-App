import React from 'react';
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from '../components/Loader';

const Login = () => {
  const { isAuth, userLoaded } = useSelector((state) => state.auth);

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
        backgroundColor: '#CFD4E3',
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
