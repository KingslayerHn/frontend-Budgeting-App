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
      const res = axios.post(`/api/friends/${friend}`, config);
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

export const getAllUserFriends = () => async (dispatch) => {};
export const getAllWaitingFriends = () => async (dispatch) => {};

export const deleteFriendFromList = (item) => ({
  type: DELETE_FRIEND_FROM_LIST,
  payload: item,
});

export const deleteWaitingFriendFromList = (item) => ({
  type: DELETE_WAITING_ELEMENT,
  payload: item,
});
