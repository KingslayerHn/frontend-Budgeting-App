import { OPEN_MODAL_NOTIFICATION } from '../types';

export const openModalNotification = (value) => ({
  type: OPEN_MODAL_NOTIFICATION,
  payload: value,
});
