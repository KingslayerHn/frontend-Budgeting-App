import axios from 'axios';
import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  DEBIT,
  ADD,
  UPDATE_ACCOUNT,
  GET_ACCOUNT_REFERENCE,
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
        message: 'the account was deleted!!',
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
    console.log('lo que estoy enviando es: ', amount);

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

export const updateAccount =
  ({ id, description }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ description });

    try {
      const res = await axios.put(`/api/accounts/update/${id}`, body, config);
      dispatch({ type: UPDATE_ACCOUNT, payload: res.data });
      dispatch({ type: GET_ACCOUNT_REFERENCE, payload: res.data });
      if (res.status === 200) {
        dispatch(
          createAlert({
            message: 'the account was updated!!',
            variant: 'success',
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
