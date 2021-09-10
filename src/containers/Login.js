import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
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
    </div>
  );
};

export default Login;
