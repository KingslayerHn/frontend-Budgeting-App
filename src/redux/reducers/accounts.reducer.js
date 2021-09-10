/* eslint-disable import/no-anonymous-default-export */
import { ADD_ACCOUNT, DELETE_ACCOUNT, GET_ACCOUNTS } from '../types';
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
    case ADD_ACCOUNT:
      return {
        ...state,
        items: [...state.items, payload],
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
