import React from 'react';
import { AiFillDollarCircle } from 'react-icons/all';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import styles from '../../styles.module.scss';

const AccountItem = ({ title, amount }) => {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.account}>
        <AiFillDollarCircle
          style={{ color: '#bdc3d8', fontSize: 70, marginRight: 20 }}
        />
        <div style={{ flex: 1 }}>
          <h6 style={{ margin: 0, color: '#bdc3d8' }}>{title}</h6>
          <NumberFormat
            value={amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            renderText={(value, props) => <div {...props}>{value}</div>}
            style={{ fontWeight: 600, color: '#FE9A01', fontSize: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
