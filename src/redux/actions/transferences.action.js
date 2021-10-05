import axios from 'axios';
import { GET_TRANSFERENCES, ADD_TRANSFER } from '../types';
import { debit, add } from './account.action';
import { setAlert as createAlert } from './alerts.action';
import {
  updateAccountByExpense,
  updateAccountByIncome,
} from './references.action';
import { openModalAddTransference } from './ui.action';

export const getTransferences = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get('/api/transferences/', config);

    dispatch({
      type: GET_TRANSFERENCES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const addTransference =
  ({
    senderAmount,
    description,
    idSenderAccount,
    idRecivedAccount,
    actualSenderAmount,
    actualRecivedAmount,
  }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({
        senderAmount,
        description,
      });

      const res = await axios.post(
        `/api/transferences/${idSenderAccount}/${idRecivedAccount}`,
        body,
        config
      );
      dispatch({
        type: ADD_TRANSFER,
        payload: res.data,
      });
      dispatch(
        debit({
          amount: parseFloat(actualSenderAmount) - parseFloat(senderAmount),
          id: idSenderAccount,
        })
      );
      dispatch(
        add({
          amount: parseFloat(actualRecivedAmount) + parseFloat(senderAmount),
          id: idRecivedAccount,
        })
      );
      dispatch(
        updateAccountByIncome(
          parseFloat(parseFloat(actualRecivedAmount) + parseFloat(senderAmount))
        )
      );
      dispatch(
        updateAccountByExpense(
          parseFloat(parseFloat(actualSenderAmount) - parseFloat(senderAmount))
        )
      );
      dispatch(
        createAlert({
          message: 'Tranference was send succefully!!',
          variant: 'success',
        })
      );
      dispatch(openModalAddTransference(false));
    } catch (err) {
      console.log(err.response);
    }
  };
