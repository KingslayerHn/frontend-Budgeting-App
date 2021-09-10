import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Alerts = () => {
  const { alerts } = useSelector((state) => state);
  if (alerts && alerts.length > 0) {
    return alerts.map((a) => (
      <Alert variant={a.variant} key={a.id}>
        {a.message}
      </Alert>
    ));
  }
  return null;
};

export default Alerts;
