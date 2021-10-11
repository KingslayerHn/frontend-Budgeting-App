import axios from 'axios';
import { HANDLE_CHANGE_SEARCH, GET_USERS_SEARCH_REFERENCE } from '../types';

export const handleChangeText = (text) => async (dispatch) => {
  dispatch({
    type: HANDLE_CHANGE_SEARCH,
    payload: text,
  });

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      text,
    });
    if (text === '') {
      dispatch({
        type: GET_USERS_SEARCH_REFERENCE,
        payload: [],
      });
    } else {
      const res = await axios.post('/api/users/search/', body, config);
      if (res.status === 200) {
        dispatch({
          type: GET_USERS_SEARCH_REFERENCE,
          payload: res.data,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const resetReferencesUsers = () => (dispatch) => {
  dispatch({
    type: GET_USERS_SEARCH_REFERENCE,
    payload: [],
  });
  dispatch({
    type: HANDLE_CHANGE_SEARCH,
    payload: '',
  });
};
