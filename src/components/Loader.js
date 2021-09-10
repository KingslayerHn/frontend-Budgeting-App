import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      variant="#ffff"
      animation="border"
      style={{ width: 20, height: 20 }}
    />
  );
};

export default Loader;
