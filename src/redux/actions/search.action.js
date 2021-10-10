import axios from 'axios';
import { HANDLE_CHANGE_SEARCH } from '../types';

export const handleChangeText = (text) => async (dispatch) => {
  dispatch({
    type: HANDLE_CHANGE_SEARCH,
    payload: text,
  });
};
