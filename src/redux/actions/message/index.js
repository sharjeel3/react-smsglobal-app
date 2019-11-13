import {
  SEND_MESSAGE_REQUESTED,
  GET_MESSAGE_REQUESTED,
  REFRESH_STATE_ITEM, GET_MESSAGE_SUCCEEDED, GET_MESSAGE_FAILED
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

export const refreshGetMessageSuccess = (error, response) => ({
  type: GET_MESSAGE_SUCCEEDED,
  error,
  response
});

export const refreshGetMessageFailure = (error, response) => ({
  type: GET_MESSAGE_FAILED,
  error,
  response
});
