/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
} from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: false,
  userLoaded: false,
  user: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        userLoaded: true,
        user: payload,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        userLoaded: false,
        user: null,
      };
    default:
      return state;
  }
};
