import axios from 'axios';
import { ADD_INCOMES, GET_INCOMES } from '../types';
import { debit } from './account.action';
import { setAlert as createAlert } from './alerts.action';
import { updateAccountByIncome } from './references.action';
import { openModalAddIncome } from './ui.action';

export const getIncomes = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get('/api/incomes/', config);

    dispatch({
      type: GET_INCOMES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const addIncome =
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

      const res = await axios.post(`/api/incomes/${id}`, body, config);
      dispatch({
        type: ADD_INCOMES,
        payload: res.data,
      });
      dispatch(debit({ amount: amountAccount + tempAmount, id: id }));
      dispatch(openModalAddIncome(false));
      dispatch(updateAccountByIncome(res.data.amount));
      dispatch(
        createAlert({
          message: `Income: ${description} added succefully!!`,
          variant: 'success',
        })
      );
    } catch (err) {
      console.log(err.response);
    }
  };
