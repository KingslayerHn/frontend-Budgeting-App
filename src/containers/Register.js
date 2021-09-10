import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
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
    </div>
  );
};

export default Register;
