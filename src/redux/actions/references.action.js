import {
  GET_ACCOUNT_REFERENCE,
  UPDATE_REFERENCE_BY_EXPENSE,
  UPDATE_REFERENCE_BY_TRANSFERENCE,
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

export const updateAccountByTransference = (amount) => ({
  type: UPDATE_REFERENCE_BY_TRANSFERENCE,
  payload: amount,
});
