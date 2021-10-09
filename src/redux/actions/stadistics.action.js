import {
  GET_ALL_YEAR_STADISTICS,
  GET_ALL_MONTH_STADISTICS,
  SET_MONTH_LOADING,
  SET_YEAR_LOADING,
} from '../types';
import moment from 'moment';
import axios from 'axios';
import { setAlert as createAlert } from './alerts.action';

export const setMonthLoading = (value) => ({
  type: SET_MONTH_LOADING,
  payload: value,
});

export const setYearLoading = (value) => ({
  type: SET_YEAR_LOADING,
  payload: value,
});

export const getAllMonthStadistics =
  ({ id, date }) =>
  async (dispatch) => {
    dispatch(setMonthLoading(true));
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const year = moment(date).year();
    const month = moment(date).month();

    const body = JSON.stringify({
      id,
      year,
      month,
    });

    try {
      const res = await axios.post(
        `/api/accounts/month/stadistics/${id}`,
        body,
        config
      );

      if (res.status === 200) {
        // reorder Data
        const data = {
          expenses:
            res.data.expenses.length === 0 ? 0 : res.data.expenses[0].expenses,
          incomes:
            res.data.incomes.length === 0 ? 0 : res.data.incomes[0].incomes,
          transferences: {
            in:
              res.data.transferencesIn.length === 0
                ? 0
                : res.data.transferencesIn[0].transferences,
            out:
              res.data.transferencesOut.length === 0
                ? 0
                : res.data.transferencesOut[0].transferences,
          },
        };

        dispatch({
          type: GET_ALL_MONTH_STADISTICS,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch(
        createAlert({
          message: 'server Error to get the month balance',
          variant: 'danger',
        })
      );
    }
  };

export const getAllYearStadistics =
  ({ id, date }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const year = moment(date).year();

    const body = JSON.stringify({
      id,
      year,
    });

    try {
      const res = await axios.post(
        `/api/accounts/year/stadistics/${id}`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_ALL_YEAR_STADISTICS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch(
        createAlert({
          message: 'server Error to get the year balance',
          variant: 'danger',
        })
      );
    }
  };
