/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
  GET_NOTIFICATION,
} from '../types';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        items: payload,
      };

    case ADD_NOTIFICATION:
      return {
        ...state,
        items: [payload, ...state.items],
      };

    case DELETE_NOTIFICATION:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== payload._id),
      };
    default:
      return state;
  }
};
