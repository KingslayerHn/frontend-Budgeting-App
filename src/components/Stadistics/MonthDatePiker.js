import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMonthStadistics } from '../../redux/actions/stadistics.action';
import ButtonAsIcon from '../Buttons/ButtonAsIcon';
import { FiArrowLeft, FiArrowRight } from 'react-icons/all';

const MonthDatePiker = () => {
  const { accountRef } = useSelector((state) => state.references);
  const [date, setDate] = useState(moment());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllMonthStadistics({
        id: accountRef._id,
        date: date,
      })
    );
  }, [date, dispatch, accountRef._id]);

  const handleAddMonth = () => {
    setDate(moment(date).add('month', 1));
  };
  const handleReduceMonth = () => {
    setDate(moment(date).add('month', -1));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonAsIcon
        icon={FiArrowLeft}
        color="#6A84F5"
        bg="red"
        size={25}
        rounded
        variant="light"
        flex={1}
        onClick={handleReduceMonth}
      />
      <h5 style={{ fontSize: 18, fontWeight: 400 }}>
        {moment(date).format('MMMM/YYYY')}
      </h5>
      <ButtonAsIcon
        icon={FiArrowRight}
        color="#6A84F5"
        bg="red"
        size={25}
        rounded
        variant="light"
        flex={1}
        onClick={handleAddMonth}
      />
    </div>
  );
};

export default MonthDatePiker;
