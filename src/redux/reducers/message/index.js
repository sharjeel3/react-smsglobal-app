import {
  GET_MESSAGE_SUCCEEDED,
  REFRESH_STATE_ITEM, SEND_MESSAGE_FAILED,
  SEND_MESSAGE_SUCCEEDED
} from '../../../constants/actionTypes';

const initialState = {
  isSending: false,
  sendError: null,
  isSent: false,
  sendResponse: null,
  sentMessages: {}
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_SUCCEEDED:
      return {
        ...state,
        sentMessages: { ...action.response },
        isSent: action.isSent
      };
    case SEND_MESSAGE_SUCCEEDED:
      return {
        ...state,
        sendResponse: { ...action.response },
        sendError: action.error,
        isSent: action.isSent
      };
    case SEND_MESSAGE_FAILED:
      return {
        ...state,
        sendError: action.error
      };
    case REFRESH_STATE_ITEM:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};
