import { GET_MESSAGE_SUCCEEDED, SEND_MESSAGE_SUCCEEDED } from '../../../constants/actionTypes';

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
        isSent: action.isSent
      };
    default:
      return state;
  }
};
