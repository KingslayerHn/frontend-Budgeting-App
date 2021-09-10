import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../types';
import setAuthToken from '../../utils/auth.token';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/users');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// register user
export const register =
  ({ firstName, lastName, email, password, genre }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      firstName,
      lastName,
      genre,
      email,
      password,
    });

    try {
      const res = await axios.post('/api/users/', body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      console.log(err);
      if (err.response !== null) {
        const errors = err.response.data;
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
