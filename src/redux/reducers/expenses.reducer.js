/* eslint-disable import/no-anonymous-default-export */
import { ADD_EXPENSES, GET_EXPENCES } from '../types';
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_EXPENCES:
      return {
        ...state,
        items: payload,
      };
    case ADD_EXPENSES:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    default:
      return state;
  }
};
