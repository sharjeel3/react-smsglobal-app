import {
  SEND_MESSAGE_REQUESTED,
  GET_MESSAGE_REQUESTED,
  REFRESH_STATE_ITEM
} from '../../../constants/actionTypes';

export const sendMessage = (origin, destination, message) => ({
  type: SEND_MESSAGE_REQUESTED,
  payload: { origin, destination, message }
});

export const getMessage = () => ({
  type: GET_MESSAGE_REQUESTED,
  payload: {}
});

export const refreshStateItem = payload => ({
  type: REFRESH_STATE_ITEM,
  payload
});
