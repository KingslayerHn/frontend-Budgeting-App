/* eslint-disable import/no-anonymous-default-export */
import { HANDLE_CHANGE_SEARCH } from '../types';
const initialState = {
  searchText: '',
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case HANDLE_CHANGE_SEARCH:
      return {
        ...state,
        searchText: payload,
      };

    default:
      return state;
  }
};
