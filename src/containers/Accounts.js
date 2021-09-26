import React from 'react';
import { useSelector } from 'react-redux';
import AccountItem from '../components/dashboard/AccountItem';

const Accounts = () => {
  const { items } = useSelector((state) => {
    return state.accounts;
  });

  const a = [
    {
      title: 'Salutec',
      amount: 2000,
    },
    {
      title: 'Banco de occidente',
      amount: 4000,
    },
    {
      title: 'Salutec',
      amount: 2000,
    },
  ];

  return (
    <>
      {a.length > 0 ? (
        a.map((item) => <AccountItem {...item} />)
      ) : (
        <div
          style={{
            display: 'flex',
            padding: 30,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <h2 style={{ fontWeight: 200, color: '#69b4ed' }}>
            not have an account yet. add one!!
          </h2>
        </div>
      )}
    </>
  );
};

export default Accounts;
