import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import image404 from '../assets/error.svg';
const Error404 = () => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: '60%',
          height: 'auto',
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img src={image404} alt="astronauts" />
      </div>
      <div style={{ flex: 1 }}>
        <Button variant="primary" onClick={handleRedirect}>
          Go back!
        </Button>
      </div>
    </div>
  );
};

export default Error404;
