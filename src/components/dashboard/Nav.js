import React, { useState } from 'react';
import styles from '../../styles.module.scss';
import { IoIosNotificationsOutline, BsSearch } from 'react-icons/all';
import { InputGroup, FormControl, Badge } from 'react-bootstrap';
import { openModalNotification } from '../../redux/actions/ui.action';
import { useDispatch, useSelector } from 'react-redux';
import Notifications from '../Notifications/Notifications';

const Nav = () => {
  const dispatch = useDispatch();
  const { modalNotifications } = useSelector((state) => state.ui);
  const { items } = useSelector((state) => state.notifications);
  const [search, setSearch] = useState('');

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSelectNotificationIcon = () => {
    dispatch(openModalNotification(!modalNotifications));
  };
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: 30,
        padding: 20,
      }}
    >
      <div className={styles.search}>
        <InputGroup style={{ border: 'none' }}>
          <InputGroup.Text
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              fontWeight: 600,
              fontSize: 26,
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <BsSearch color="#0d56b3" />
          </InputGroup.Text>
          <FormControl
            autoComplete="false"
            type="email"
            placeholder="search friends"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="search"
            value={search}
            onChange={handleInputChange}
            className={styles.inputSearch}
          />
        </InputGroup>
      </div>
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
