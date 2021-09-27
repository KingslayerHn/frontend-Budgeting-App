import { OPEN_MODAL_NOTIFICATION, OPEN_MODAL_EDIT_PROFILE } from '../types';

export const openModalNotification = (value) => ({
  type: OPEN_MODAL_NOTIFICATION,
  payload: value,
});

export const openModalEditProfile = (value) => ({
  type: OPEN_MODAL_EDIT_PROFILE,
  payload: value,
});
