import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RiErrorWarningLine, MdDone } from 'react-icons/all';
import styles from '../styles.module.scss';

const Alerts = () => {
  const { alerts } = useSelector((state) => state);

  if (alerts && alerts.length > 0) {
    return alerts.map((a) => (
      <Alert
        variant={a.variant}
        key={a.id}
        style={{
          position: 'absolute',
          bottom: 40,
          margin: 'auto',
          border: 'none',
          backgroundColor: `${a.variant === 'danger' ? '#D3302F' : '#6a84f6'}`,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 'auto',
          color: '#fff',
          padding: 20,
          fontSize: 16,
          fontWeight: 300,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        className={styles.alerts}
      >
        {a.variant === 'danger' && (
          <RiErrorWarningLine size={20} style={{ marginRight: 10 }} />
        )}
        {a.variant === 'success' && (
          <MdDone size={20} style={{ marginRight: 10 }} />
        )}
        {a.message}
      </Alert>
    ));
  }
  return null;
};

export default Alerts;
