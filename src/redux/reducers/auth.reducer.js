/* eslint-disable import/no-anonymous-default-export */
import { REGISTER_SUCCESS } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  userLoaded: false,
  user: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
