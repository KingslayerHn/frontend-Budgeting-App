import React from 'react';
import { GiPayMoney, GiReceiveMoney, BiTransfer } from 'react-icons/all';
import BalanceMonthPlaceHolder from '../placeholders/BalanceMonthPlaceHolder';
import TotalItemPerAccount from '../Stadistics/TotalItemPerAccount';

const BalanceMonth = () => {
  if (true) {
    return <BalanceMonthPlaceHolder />;
  }

  return (
    <>
      <h5 style={{ color: '#527491', paddingLeft: 20 }}>november</h5>
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
          margin: 15,
        }}
      >
        <TotalItemPerAccount
          description="Expenses"
          icon={GiPayMoney}
          total={200}
          bgIcon="#6A84F5"
          fzIcon={20}
          sizeBgIcon={50}
        />

        <TotalItemPerAccount
          description="Incomes"
          icon={GiReceiveMoney}
          total={600}
          bgIcon="#6A84F5"
          fzIcon={20}
          sizeBgIcon={50}
        />

        <TotalItemPerAccount
          description="Transferences"
          icon={BiTransfer}
          total={100}
          bgIcon="#6A84F5"
          fzIcon={20}
          sizeBgIcon={50}
        />
      </div>
    </>
  );
};

export default BalanceMonth;
