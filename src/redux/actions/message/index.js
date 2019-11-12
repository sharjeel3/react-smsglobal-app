import { SEND_MESSAGE_REQUESTED, GET_MESSAGE_REQUESTED } from '../../../constants/actionTypes';

export const sendMessage = (origin, destination, message) => ({
  type: SEND_MESSAGE_REQUESTED,
  payload: { origin, destination, message }
});

export const getMessage = () => ({
  type: GET_MESSAGE_REQUESTED,
  payload: {}
});
