/* eslint-disable import/no-anonymous-default-export */
import {
  GET_USER_REFERENCE,
  DELETE_USER_REFERENCE,
  GET_ACCOUNT_REFERENCE,
  DELETE_ACCOUNT_REFERENCE,
} from '../types';

const initialState = {
  userRef: null,
  accountRef: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER_REFERENCE:
    case DELETE_USER_REFERENCE:
      return {
        ...state,
        userRef: payload,
      };
    case GET_ACCOUNT_REFERENCE:
    case DELETE_ACCOUNT_REFERENCE:
      return {
        ...state,
        accountRef: payload,
      };

    default:
      return state;
  }
};
