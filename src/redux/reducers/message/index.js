import { GET_MESSAGE_SUCCEEDED } from '../../../constants/actionTypes';

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
        sentMessages: { ...action.response }
      };
    default:
      return state;
  }
};
