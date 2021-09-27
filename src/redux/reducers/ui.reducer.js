/* eslint-disable import/no-anonymous-default-export */
import {
  OPEN_MODAL_NOTIFICATION,
  OPEN_MODAL_EDIT_PROFILE,
  MODAL_DELETE_ACCOUNT,
  MODAL_OPEN_UPDATE_ACCOUNT,
} from '../types';

const initialState = {
  modalNotifications: false,
  modalEditProfile: false,
  modalDeleteAccount: false,
  modalUpdateAccount: false,
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
    case MODAL_DELETE_ACCOUNT:
      return {
        ...state,
        modalDeleteAccount: payload,
      };
    case MODAL_OPEN_UPDATE_ACCOUNT:
      return {
        ...state,
        modalUpdateAccount: payload,
      };

    default:
      return state;
  }
};
