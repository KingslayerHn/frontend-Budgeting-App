/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  DEBIT,
  ADD,
  UPDATE_ACCOUNT,
} from '../types';
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ACCOUNTS:
      return {
        ...state,
        items: payload,
      };
    case DEBIT:
    case ADD:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              amount: payload.amount,
            };
          }
          return item;
        }),
      };

    case UPDATE_ACCOUNT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              description: payload.description,
            };
          }
          return item;
        }),
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        items: state.items.filter((account) => account._id !== payload._id),
      };
    default:
      return state;
  }
};
