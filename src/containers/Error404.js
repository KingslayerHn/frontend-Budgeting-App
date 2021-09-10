import React from 'react';
import { Button } from 'react-bootstrap';
import Astro from '../assets/astronaunts.svg';
const Error404 = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '50%',
          height: 'auto',
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img src={Astro} alt="astronauts" />
      </div>
      <div style={{ flex: 1 }}>
        <Button variant="primary">Go back!</Button>
      </div>
    </div>
  );
};

export default Error404;
