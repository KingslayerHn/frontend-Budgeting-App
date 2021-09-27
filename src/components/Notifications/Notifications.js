import React from 'react';
import { Badge } from 'react-bootstrap';
import styles from '../../styles.module.scss';
import avatar from '../../assets/avatar.svg';
import NotificationItem from '../Notifications/NorificationItem';
import { useSelector } from 'react-redux';

const notis = [
  {
    title: 'te ha enviado dinero',
    image: avatar,
    userName: 'Jorge Almendarez',
    createAt: '2000-10-10',
  },
  {
    title: 'te ha enviado dinero',
    image: avatar,
    userName: 'Jorge Almendarez',
    createAt: '2000-10-10',
  },
  {
    title: 'te ha enviado dinero',
    image: avatar,
    userName: 'Jorge Almendarez',
    createAt: '2000-10-10',
  },
  {
    title: 'te ha enviado dinero',
    image: avatar,
    userName: 'Jorge Almendarez',
    createAt: '2000-10-10',
  },
  {
    title: 'te ha enviado dinero',
    image: avatar,
    userName: 'Jorge Almendarez',
    createAt: '2000-10-10',
  },
];

const Notifications = () => {
  const { items } = useSelector((state) => state.notifications);
  return (
    <div className={styles.notificationPanel}>
      <div className={styles.notificationTriangleContainer}>
        <span style={{ fontWeight: 600, fontSize: 14, color: '#979899' }}>
          Notifications
        </span>
        <Badge style={{ marginLeft: 20 }}>{items.length}</Badge>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          height: 320,
        }}
      >
        {notis.length > 0 ? (
          notis.map((item, index) => <NotificationItem {...item} key={index} />)
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: 50,
            }}
          >
            <h4
              style={{ fontWeight: 300, textAlign: 'center', color: '#69B4ED' }}
            >
              You have not notifications
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
