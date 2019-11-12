import { notifyReducer } from './index';
import { UPDATE_NOTIFY } from '../../../constants/actionTypes';

describe('REDUCER - NOTIFY', () => {
  const action = {
    type: UPDATE_NOTIFY,
    payload: {
      isActive: true,
      message: 'hi again',
      timerId: 4,
      isError: false
    }
  };

  it('should update notify state', () => {
    expect(notifyReducer({}, action)).toEqual({
      ...action.payload
    });
  });
});
