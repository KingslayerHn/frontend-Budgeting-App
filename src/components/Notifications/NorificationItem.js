import React from 'react';
import moment from 'moment';
import 'moment/locale/es';
import styles from '../../styles.module.scss';
const NorificationItem = ({ image, userName, title, createAt }) => {
  return (
    <div className={styles.containerItemNotification}>
      <div>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            width: 60,
            height: 60,
            borderRadius: '100%',
          }}
        />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}
      >
        <div>
          <b style={{ fontSize: 16, color: '#88939D' }}>{userName}</b>
          <span style={{ fontSize: 13, color: '#88939D' }}> {` ${title}`}</span>
        </div>
        <b style={{ fontSize: 12, color: '#88939D' }}>
          {moment(createAt).fromNow()}
        </b>
      </div>
    </div>
  );
};

export default NorificationItem;
