/* eslint-disable import/no-anonymous-default-export */
import { OPEN_MODAL_NOTIFICATION, OPEN_MODAL_EDIT_PROFILE } from '../types';

const initialState = {
  modalNotifications: false,
  modalEditProfile: false,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case OPEN_MODAL_NOTIFICATION:
      return {
        ...state,
        modalNotifications: payload,
      };
    case OPEN_MODAL_EDIT_PROFILE:
      return {
        ...state,
        modalEditProfile: payload,
      };

    default:
      return state;
  }
};
