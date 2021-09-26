/* eslint-disable import/no-anonymous-default-export */
import { OPEN_MODAL_NOTIFICATION } from '../types';

const initialState = {
  modalNotifications: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case OPEN_MODAL_NOTIFICATION:
      return {
        ...state,
        modalNotifications: payload,
      };

    default:
      return state;
  }
};
