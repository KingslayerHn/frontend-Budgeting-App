import {
  OPEN_MODAL_NOTIFICATION,
  OPEN_MODAL_EDIT_PROFILE,
  MODAL_DELETE_ACCOUNT,
  MODAL_OPEN_UPDATE_ACCOUNT,
  OPEN_MODAL_UPDATE_USER_IMAGE,
  MODAL_ADD_EXPENSE,
  MODAL_ADD_INCOME,
  MODAL_ADD_TRANFERENCE,
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

export const openModalAddExpense = (value) => ({
  type: MODAL_ADD_EXPENSE,
  payload: value,
});

export const openModalAddIncome = (value) => ({
  type: MODAL_ADD_INCOME,
  payload: value,
});
export const openModalAddTransference = (value) => ({
  type: MODAL_ADD_TRANFERENCE,
  payload: value,
});
