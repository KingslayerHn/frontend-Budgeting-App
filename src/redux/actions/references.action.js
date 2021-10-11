import axios from 'axios';
import {
  GET_ACCOUNT_REFERENCE,
  GET_USER_REFERENCE,
  UPDATE_REFERENCE_BY_EXPENSE,
  UPDATE_REFERENCE_BY_INCOME,
} from '../types';

export const getAccountReference = (item) => ({
  type: GET_ACCOUNT_REFERENCE,
  payload: item,
});

export const updateAccountByExpense = (amount) => ({
  type: UPDATE_REFERENCE_BY_EXPENSE,
  payload: amount,
});

export const updateAccountByIncome = (amount) => ({
  type: UPDATE_REFERENCE_BY_INCOME,
  payload: amount,
});

export const getUserReference = (item) => ({
  type: GET_USER_REFERENCE,
  payload: item,
});

export const getUserReferenceById = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.get(`/api/users/by/${id}`, config);

    dispatch({
      type: GET_USER_REFERENCE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
