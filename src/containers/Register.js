import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        backgroundColor: '#CFD4E3',
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
