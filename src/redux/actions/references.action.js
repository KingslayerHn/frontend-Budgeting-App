import { GET_ACCOUNT_REFERENCE } from '../types';

export const getAccountReference = (item) => ({
  type: GET_ACCOUNT_REFERENCE,
  payload: item,
});
