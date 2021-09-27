import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_USER,
} from '../types';
import setAuthToken from '../../utils/auth.token';
import { setAlert } from './alerts.action';

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
      if (err.response) {
        dispatch(
          setAlert({
            variant: 'danger',
            message: err.response.data.message,
          })
        );
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('/api/users/signin', body, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      if (err.response) {
        dispatch(
          setAlert({
            variant: 'danger',
            message: err.response.data.message,
          })
        );
      }

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const updateProfile =
  ({ email, bio, profession, firstName, lastName, genre }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      email,
      bio,
      profession,
      firstName,
      lastName,
      genre,
    });

    try {
      const res = await axios.put('/api/users/update', body, config);
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
      if (res.status === 200) {
        dispatch(
          setAlert({
            variant: 'success',
            message: 'user Update success!',
          })
        );
      }
    } catch (err) {
      console.log(err);
      dispatch(
        setAlert({
          variant: 'danger',
          message: 'user cannot be updated',
        })
      );
    }
  };

export const updatePassword =
  ({ password, newPass }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      password,
      newPass,
    });

    try {
      const res = await axios.post('/api/users/update/password', body, config);
      if (res.status === 200) {
        dispatch(
          setAlert({
            variant: 'success',
            message: 'password updated!!',
          })
        );
      }
    } catch (err) {
      console.log(err);
      dispatch(
        setAlert({
          variant: 'danger',
          message: err.response.data.message,
        })
      );
    }
  };
