import axios from 'axios';
import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  DEBIT,
  ADD,
} from '../types';
import { setAlert as createAlert } from './alerts.action';

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
      dispatch(
        createAlert({
          message: 'The account was added successfully!!',
          variant: 'success',
        })
      );
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
    dispatch(
      createAlert({
        message: 'Account deleted!!',
        variant: 'success',
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const debit =
  ({ id, amount }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ amount });

    try {
      const res = await axios.put(`/api/accounts/${id}`, body, config);
      dispatch({ type: DEBIT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

export const add =
  ({ id, amount }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ amount });

    try {
      const res = await axios.put(`/api/accounts/${id}`, body, config);
      dispatch({ type: ADD, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
