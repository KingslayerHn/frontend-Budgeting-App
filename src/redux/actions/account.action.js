import axios from 'axios';
import { ADD_ACCOUNT, DELETE_ACCOUNT, GET_ACCOUNTS } from '../types';

export const getAccounts = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get('/api/accounts/', config);

    dispatch({
      type: GET_ACCOUNTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const addAccount =
  ({ amount, description }) =>
  async (dispatch) => {
    try {
      const tempAmount = parseFloat(amount);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({ amount: tempAmount, description });

      const res = await axios.post(`/api/accounts/`, body, config);
      dispatch({
        type: ADD_ACCOUNT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response);
    }
  };

export const deleteAccount = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/accounts/${id}`);
    dispatch({
      type: DELETE_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
