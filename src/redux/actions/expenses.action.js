import axios from 'axios';
import { ADD_EXPENSES, GET_EXPENCES } from '../types';
import { debit } from './account.action';

export const getExpenses = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get('/api/expenses/', config);

    dispatch({
      type: GET_EXPENCES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const addExpense =
  ({ amount, description, id, amountAccount }) =>
  async (dispatch) => {
    try {
      const tempAmount = parseFloat(amount);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({
        amount: tempAmount,
        description,
      });

      const res = await axios.post(`/api/expenses/${id}`, body, config);
      dispatch({
        type: ADD_EXPENSES,
        payload: res.data,
      });
      dispatch(debit({ amount: amountAccount - tempAmount, id: id }));
    } catch (err) {
      console.log(err.response);
    }
  };
