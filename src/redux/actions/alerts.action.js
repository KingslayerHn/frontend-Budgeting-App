import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../types';

export const setAlert =
  ({ message, variant }) =>
  (dispatch) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { message, variant, id },
    });
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      5000
    );
  };
