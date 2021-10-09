import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import ButtonAsIcon from '../Buttons/ButtonAsIcon';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all';
import { getAllYearStadistics } from '../../redux/actions/stadistics.action';

const YearDataPiker = () => {
  const { accountRef } = useSelector((state) => state.references);
  const [date, setDate] = useState(moment());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllYearStadistics({
        id: accountRef._id,
        date: date,
      })
    );
  }, [date, dispatch, accountRef._id]);

  const handleAddMonth = () => {
    setDate(moment(date).add('year', 1));
  };
  const handleReduceMonth = () => {
    setDate(moment(date).add('year', -1));
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 10 }}
    >
      <ButtonAsIcon
        icon={MdKeyboardArrowLeft}
        color="#6A84F5"
        bg="red"
        size={25}
        rounded
        variant="light"
        onClick={handleReduceMonth}
      />
      <h5 style={{ fontSize: 18, fontWeight: 400 }}>
        {moment(date).format('YYYY')}
      </h5>
      <ButtonAsIcon
        icon={MdKeyboardArrowRight}
        color="#6A84F5"
        bg="red"
        size={25}
        rounded
        variant="light"
        onClick={handleAddMonth}
      />
    </div>
  );
};

export default YearDataPiker;
