import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alerts from '../components/Alert';

const Register = () => {
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
      <RegisterForm />
      <Alerts />
    </div>
  );
};

export default Register;
