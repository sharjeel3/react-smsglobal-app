import { SEND_MESSAGE_REQUESTED } from '../../../constants/actionTypes';

const initialState = {
  isSending: false,
  sendError: null,
  isSent: false,
  sendResponse: null
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUESTED:
      return {
        ...state,
        isSending: action.isSending
      };
    default:
      return state;
  }
};
