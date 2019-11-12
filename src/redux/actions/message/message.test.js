import {
  SEND_MESSAGE_REQUESTED,
  GET_MESSAGE_REQUESTED,
  REFRESH_STATE_ITEM
} from '../../../constants/actionTypes';

import { sendMessage, getMessage, refreshStateItem } from './index';

describe('ACTION CREATOR - MESSAGE', () => {
  it('should return SEND_MESSAGE_REQUESTED', () => {
    expect(sendMessage('test', '0400011111', 'some texts')).toEqual({
      type: SEND_MESSAGE_REQUESTED,
      payload: { origin: 'test', destination: '0400011111', message: 'some texts' }
    });
  });

  it('should return GET_MESSAGE_REQUESTED', () => {
    expect(getMessage()).toEqual({
      type: GET_MESSAGE_REQUESTED,
      payload: {}
    });
  });

  it('should return REFRESH_STATE_ITEM', () => {
    const payload = { isSent: false };
    expect(refreshStateItem(payload)).toEqual({
      type: REFRESH_STATE_ITEM,
      payload
    });
  });
});
