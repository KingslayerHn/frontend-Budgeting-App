import {
  OPEN_MODAL_NOTIFICATION,
  OPEN_MODAL_EDIT_PROFILE,
  MODAL_DELETE_ACCOUNT,
  MODAL_OPEN_UPDATE_ACCOUNT,
  OPEN_MODAL_UPDATE_USER_IMAGE,
} from '../types';

export const openModalNotification = (value) => ({
  type: OPEN_MODAL_NOTIFICATION,
  payload: value,
});

export const openModalEditProfile = (value) => ({
  type: OPEN_MODAL_EDIT_PROFILE,
  payload: value,
});

export const openModalDeleteAccount = (value) => ({
  type: MODAL_DELETE_ACCOUNT,
  payload: value,
});

export const openModalUpdateAccount = (value) => ({
  type: MODAL_OPEN_UPDATE_ACCOUNT,
  payload: value,
});

export const openModalUpdateUserImageProfile = (value) => ({
  type: OPEN_MODAL_UPDATE_USER_IMAGE,
  payload: value,
});
