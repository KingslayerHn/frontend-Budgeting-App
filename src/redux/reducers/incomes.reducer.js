/* eslint-disable import/no-anonymous-default-export */
import { ADD_INCOMES, GET_INCOMES } from '../types';
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_INCOMES:
      return {
        ...state,
        items: payload,
      };
    case ADD_INCOMES:
      return {
        ...state,
        items: [payload, ...state.items],
      };
    default:
      return state;
  }
};
