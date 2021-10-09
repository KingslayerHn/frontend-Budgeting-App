/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_MONTH_STADISTICS,
  GET_ALL_YEAR_STADISTICS,
  SET_MONTH_LOADING,
  SET_YEAR_LOADING,
} from '../types';
const initialState = {
  month: {
    incomes: 0,
    expenses: 0,
    transferences: {
      in: 0,
      out: 0,
    },
    loading: true,
  },
  year: {
    incomes: [],
    expenses: [],
    transferences: {
      in: [],
      out: [],
    },
    loading: true,
  },
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_MONTH_STADISTICS:
      return {
        ...state,
        month: {
          ...state.month,
          incomes: payload.incomes,
          expenses: payload.expenses,
          transferences: {
            ...state.month.transferences,
            in: payload.transferences.in,
            out: payload.transferences.out,
          },
          loading: false,
        },
      };

    case GET_ALL_YEAR_STADISTICS:
      return {
        ...state,
        year: {
          ...state.year,
          incomes: payload.incomes,
          expenses: payload.expenses,
          transferences: {
            ...state.year.transferences,
            in: payload.transferencesIn,
            out: payload.transferencesOut,
          },
          loading: false,
        },
      };

    case SET_MONTH_LOADING:
      return {
        ...state,
        month: {
          ...state.month,
          loading: payload,
        },
      };

    case SET_YEAR_LOADING:
      return {
        ...state,
        year: {
          ...state.year,
          loading: payload,
        },
      };

    default:
      return state;
  }
};
