/* eslint-disable import/no-anonymous-default-export */
import {
  GET_USER_FRIEND_LIST,
  GET_USER_WAITING_FRIENDS_LIST,
  DELETE_FRIEND_FROM_LIST,
  DELETE_WAITING_ELEMENT,
  ADD_FRIEND,
} from '../types';

const initialState = {
  friends: [],
  waiting: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER_FRIEND_LIST:
      return {
        ...state,
        friends: payload,
      };
    case GET_USER_WAITING_FRIENDS_LIST:
      return {
        ...state,
        waiting: payload,
      };
    case DELETE_FRIEND_FROM_LIST:
      return {
        ...state,
        friends: state.friends.filter((friend) => friend !== payload._id),
      };
    case DELETE_WAITING_ELEMENT:
      return {
        ...state,
        waiting: state.waiting.filter((friend) => friend._id !== payload._id),
      };

    case ADD_FRIEND:
      return {
        ...state,
        friends: [payload, ...state.friends],
      };

    default:
      return state;
  }
};
