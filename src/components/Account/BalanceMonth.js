import React from 'react';
import { GiPayMoney, GiReceiveMoney, BiTransfer } from 'react-icons/all';
import { useSelector } from 'react-redux';
import BalanceMonthPlaceHolder from '../placeholders/BalanceMonthPlaceHolder';
import MonthDatePiker from '../Stadistics/MonthDatePiker';
import TotalItemPerAccount from '../Stadistics/TotalItemPerAccount';

const BalanceMonth = () => {
  const {
    month: { loading, expenses, incomes, transferences },
  } = useSelector((state) => state.stadistics);

  if (loading) {
    return (
      <>
        <MonthDatePiker />

        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 20,
            margin: '8px 15px 15px 15px',
          }}
        >
          <BalanceMonthPlaceHolder />
        </div>
      </>
    );
  }

  return (
    <>
      <MonthDatePiker />
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
          margin: '8px 15px 15px 15px',
        }}
      >
        <TotalItemPerAccount
          description="Expenses"
          icon={GiPayMoney}
          total={expenses}
          bgIcon="#6A84F5"
          fzIcon={20}
          sizeBgIcon={50}
        />

        <TotalItemPerAccount
          description="Incomes"
          icon={GiReceiveMoney}
          total={incomes}
          bgIcon="#6A84F5"
          fzIcon={20}
          sizeBgIcon={50}
        />

        <TotalItemPerAccount
          description="Transferences"
          icon={BiTransfer}
          total={transferences}
          bgIcon="#6A84F5"
          fzIcon={20}
          sizeBgIcon={50}
          transference
        />
      </div>
    </>
  );
};

export default BalanceMonth;
