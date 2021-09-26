import React from 'react';
import { AiFillDollarCircle } from 'react-icons/all';
import NumberFormat from 'react-number-format';
import styles from '../../styles.module.scss';
import { useDispatch } from 'react-redux';
import { getAccountReference } from '../../redux/actions/references.action';

const AccountItem = ({ description, amount, item }) => {
  const dispatch = useDispatch();
  const handleAddAccountReference = () => {
    dispatch(getAccountReference(item));
  };
  return (
    <div
      className={styles.accountContainer}
      onClick={handleAddAccountReference}
    >
      <div className={styles.account}>
        <AiFillDollarCircle
          style={{ color: '#bdc3d8', fontSize: 70, marginRight: 20 }}
        />
        <div style={{ flex: 1 }}>
          <h6 style={{ margin: 0, color: '#bdc3d8' }}>{description}</h6>
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
