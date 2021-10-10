import React from 'react';
import styles from '../../styles.module.scss';
import { IoIosNotificationsOutline } from 'react-icons/all';
import { Badge } from 'react-bootstrap';
import { openModalNotification } from '../../redux/actions/ui.action';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import Search from './Search';

const Nav = () => {
  const dispatch = useDispatch();

  const { modalNotifications } = useSelector((state) => state.ui);
  const { items } = useSelector((state) => state.notifications);

  const handleSelectNotificationIcon = () => {
    dispatch(openModalNotification(!modalNotifications));
  };

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: 30,
        padding: 20,
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <Search />
      <div className={styles.notificationIconContainer}>
        {!modalNotifications && items.length > 0 && (
          <Badge
            style={{ position: 'absolute', fontSize: 7, top: 19, right: 4 }}
          >
            {items.length}
          </Badge>
        )}
        <IoIosNotificationsOutline
          className={styles.notificationIcon}
          onClick={handleSelectNotificationIcon}
          style={{
            color: modalNotifications && '#fd6900',
            cursor: 'pointer',
          }}
        />
        {modalNotifications && <Notifications />}
      </div>
    </div>
  );
};

export default Nav;
