import React from 'react';
import Avatar from 'react-avatar';
import styles from '../styles.module.scss';

const AvatarSearch = ({ firstName, lastName, profession, email, src }) => {
  return (
    <div className={[styles.searchItemReference]}>
      <Avatar size={50} round src={src} />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingLeft: 20,
        }}
      >
        <h6
          style={{ margin: 0, padding: 0, fontSize: 13 }}
        >{`${firstName} ${lastName}`}</h6>
        <span style={{ margin: 0, padding: 0, fontSize: 13 }}>
          {profession}
        </span>
        <span style={{ fontSize: 13 }}>{email}</span>
      </div>
    </div>
  );
};

export default AvatarSearch;
