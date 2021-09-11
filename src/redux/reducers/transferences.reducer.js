/* eslint-disable import/no-anonymous-default-export */
import { ADD_TRANSFER, GET_TRANSFERENCES } from '../types';
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_TRANSFERENCES:
      return {
        ...state,
        items: payload,
      };

    case ADD_TRANSFER:
      return {
        ...state,
        items: [...state.items, payload],
      };

    default:
      return state;
  }
};
