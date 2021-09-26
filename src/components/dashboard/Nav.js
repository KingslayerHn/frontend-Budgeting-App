import React, { useState } from 'react';
import styles from '../../styles.module.scss';
import { IoIosNotificationsOutline, BsSearch } from 'react-icons/all';
import { InputGroup, FormControl } from 'react-bootstrap';

const Nav = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
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
        <IoIosNotificationsOutline className={styles.notificationIcon} />
      </div>
    </div>
  );
};

export default Nav;
