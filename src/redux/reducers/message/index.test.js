import {
  GET_MESSAGE_SUCCEEDED,
  REFRESH_STATE_ITEM,
  SEND_MESSAGE_FAILED,
  SEND_MESSAGE_SUCCEEDED
} from '../../../constants/actionTypes';
import { messageReducer } from './index';

describe('REDUCER - MESSAGE', () => {
  it('should update get messages state', () => {
    const action = {
      type: GET_MESSAGE_SUCCEEDED,
      response: {
        messages: [{ id: 545454454 }]
      },
      isSent: true
    };
    expect(messageReducer({}, action)).toEqual({
      sentMessages: action.response,
      isSent: action.isSent
    });
  });

  it('should update send message success state', () => {
    const action = {
      type: SEND_MESSAGE_SUCCEEDED,
      response: {
        messages: [{ id: 545454454 }]
      },
      isSent: true,
      error: null
    };
    expect(messageReducer({}, action)).toEqual({
      sendResponse: {
        messages: [{ id: 545454454 }]
      },
      isSent: true,
      sendError: null
    });
  });

  it('should update send message error state', () => {
    const action = {
      type: SEND_MESSAGE_FAILED,
      error: { errors: { destination: { errors: ['Wrong number'] } }}
    };
    expect(messageReducer({}, action)).toEqual({
      sendError: { errors: { destination: { errors: ['Wrong number'] } }}
    });
  });

  it('should update state item', () => {
    const action = {
      type: REFRESH_STATE_ITEM,
      payload: { isSent: false }
    };
    expect(messageReducer({ sendResponse: null }, action)).toEqual({
      sendResponse: null,
      isSent: false
    });
  });
});
