import axios from 'axios';
import {
  GET_USER_FRIEND_LIST,
  GET_USER_WAITING_FRIENDS_LIST,
  DELETE_FRIEND_FROM_LIST,
  DELETE_WAITING_ELEMENT,
  ADD_FRIEND,
} from '../types';

export const addFriend =
  ({ friend }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`/api/friends/${friend}`, config);
      if (res.status === 200) {
        dispatch({
          type: ADD_FRIEND,
          payload: res.data.friend,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

export const getAllUserFriends = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.get('/api/friends/', config);

    if (res.status === 200) {
      dispatch({
        type: GET_USER_FRIEND_LIST,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllWaitingFriends = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.get('/api/friends/waiting', config);

    if (res.status === 200) {
      dispatch({
        type: GET_USER_WAITING_FRIENDS_LIST,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const changeStatusOfFriendship =
  ({ status, friend }) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({
        status,
      });
      await axios.put(`/api/friends/${friend}`, body, config);

      dispatch(getAllUserFriends());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteFriendFromList = (item) => ({
  type: DELETE_FRIEND_FROM_LIST,
  payload: item,
});

export const deleteWaitingFriendFromList = (item) => ({
  type: DELETE_WAITING_ELEMENT,
  payload: item,
});

export const checkStatusFriendship = async ({ friend }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(`/api/friends/are/friends/${friend}`, config);

    return res.data.type;
  } catch (error) {
    console.log(error);
  }
};
