import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        minHeight: '100vh',
      }}
    >
      <Spinner
        animation="border"
        style={{ width: 100, height: 100, color: '#fff' }}
      />
    </div>
  );
};

export default Loader;
