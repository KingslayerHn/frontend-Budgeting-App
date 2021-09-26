import React from 'react';
import { Badge } from 'react-bootstrap';
import styles from '../../styles.module.scss';

const Notifications = () => {
  return (
    <div className={styles.notificationPanel}>
      <div className={styles.notificationTriangleContainer}>
        <span style={{ fontWeight: 600, fontSize: 14, color: '#979899' }}>
          Notifications
        </span>
        <Badge style={{ marginLeft: 20 }}>6</Badge>
      </div>
      <div>items</div>
    </div>
  );
};

export default Notifications;
