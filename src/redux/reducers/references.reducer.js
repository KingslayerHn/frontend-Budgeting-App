/* eslint-disable import/no-anonymous-default-export */
import {
  GET_USER_REFERENCE,
  DELETE_USER_REFERENCE,
  GET_ACCOUNT_REFERENCE,
  DELETE_ACCOUNT_REFERENCE,
  UPDATE_REFERENCE_BY_EXPENSE,
  UPDATE_REFERENCE_BY_INCOME,
  GET_USERS_SEARCH_REFERENCE,
} from '../types';

const initialState = {
  userRef: null,
  accountRef: null,
  searchUsersReference: [],
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

    case UPDATE_REFERENCE_BY_EXPENSE:
    case UPDATE_REFERENCE_BY_INCOME:
      return {
        ...state,
        accountRef: {
          ...state.accountRef,
          amount: payload,
        },
      };

    case GET_USERS_SEARCH_REFERENCE:
      return {
        ...state,
        searchUsersReference: payload,
      };

    default:
      return state;
  }
};
